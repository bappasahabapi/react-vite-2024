// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en

export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/location`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getLocationLatLong = async (locationName) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/location/${locationName}`
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};