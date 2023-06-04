import axios from "axios";
export const getSingleImage = async (cityname) => {
    try{
        const url = `https://api.unsplash.com/photos/random/?query=${cityname}&orientation=landscape&count=1`;
        const response = await axios.get(url, 
                        {
                            headers: {
                                "Accept-Version": "v1",
                                "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                            }
                        });
        return response.data[0].urls.full;
    } catch(error) {
        console.log(error);
    } 
}
export const getImages = async (cityname) => {
    try {
        const url = `https://api.unsplash.com/photos/random/?query=${cityname}&count=10`;
        const response = await axios.get(url, 
                        {
                            headers: {
                                "Accept-Version": "v1",
                                "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                            }
                        });
        return response.data;
    } catch(error) {
        console.log(error);
    }
}
