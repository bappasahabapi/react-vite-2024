import { useEffect, useState } from "react";


 export function useFetch(fetchFn,initialValue) {

    const [isFetching, setIsFetching] =useState();
    const [error, setError] = useState();
    const [fetchedDaTa, setFetchedData] = useState(initialValue);
    

    useEffect(() => {
        async function fetchDaTa() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
            // const places = await fetchUserPlaces();
            // setUserPlaces(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchDaTa();
        // fetchPlaces();
      }, [fetchFn]);

      return{
        isFetching,
        fetchedDaTa,
        error,
        setFetchedData
      }
}