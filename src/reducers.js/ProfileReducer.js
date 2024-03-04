// const [user, setUser] = useState(null);
// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

import { actions } from "../actions";
const initialState ={
    user: null,
    posts:[],
    loading:false,
    error:null,
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING:{
            return{
                ...state,
                loading:true,
            }
        }

        
        case actions.profile.DATA_FETCHED:{
            return{
                ...state,
                loading:false,   
                user:action?.data?.user, //  setUser(response?.data?.user);
                posts:action.data.posts, // setPosts(response?.data?.posts);
                // user:action.payload.user,
            }
        }
        case actions.profile.DATA_FETCH_ERROR:{
            return{
                ...state,
                loading:false,
                error:action.error  // setError(error);
            }
        }
        default:{
            return state
        }

    }
 
}

// eslint-disable-next-line react-refresh/only-export-components
export {profileReducer,initialState} ;