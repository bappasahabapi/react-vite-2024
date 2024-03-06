import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPost from "../components/profile/MyPost";

const ProfilePage = () => {
  // const [user, setUser] = useState(null);
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const {state, dispatch } = useProfile();
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    // setLoading(true);
    dispatch({
      type: actions.profile.DATA_FETCHING,
    });
   

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        // console.log(response) // {{user},posts[{}..]

        // setUser(response?.data?.user);
        // setPosts(response?.data?.posts);
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data:response.data
          });
        }
      } catch (error) {
        console.error(error);
        // setError(error);
        dispatch({ type: actions.profile.DATA_FETCH_ERROR,error:error.message})
      } 
      // finally {
      //   setLoading(false);
      // }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }

  return (
    <>
      {/* Welcome, {state?.user?.firstName} {state?.user?.lastName}
      <p>You have {state?.posts?.length} posts.</p> */}
      <ProfileInfo/>
      <MyPost/>
    </>
  );
};

export default ProfilePage;
