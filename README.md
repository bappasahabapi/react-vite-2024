


**1. Set up Initial Setup**

    - Set up Tailwind Configuration in `tailwind.config.js    `
    - make Custom taiwind utility class in `global.css file`
    
**2. API Development**

- [Working on Geolocaton API ](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Working on Air Pollution API ](https://openweathermap.org/api/air-pollution)
- [Working on Weather Data API ](https://openweathermap.org/current) - I used this in Weather dashboard project
- [Reverse Geocodeing City Data API ](https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api#introduction)
- we developed an API which will return longatitude and latitude from location
    - make some data in `location-utils.js` file and store this as array of object
    - `const locationData = [ {},{},... ];`
    - hit this url to see the api  `http://localhost:3000/api/location`
    - hit this url to see the api  `http://localhost:3000/api/location/dhaka`
    
**3. Make Parallel Routing slot skeletons**

- Implement Parallel Routing in `[locaiton]` folder

    - @aqi
    - @weather
    - @temperature
    - @wind 

**4. Detect Geolocation & Reroute**
- `LocationDetector.jsx` file
- `http://localhost:3000/current/?lat={}&lon={}`
- Here we work in query and search parameters so we use useSearchParams form nextjs.
- usePathname, useRouter.
- To get the url search params we pass our `searchParam` to the `URLSearchParams(searchParams)` 
- so that we get` http://localhost:3000/current?latitude=23.7389396&longitude=90.3929374`