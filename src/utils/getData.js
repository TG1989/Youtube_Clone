import axios from "axios";

axios.defaults.baseURL =  'https://yt-api.p.rapidapi.com'

const options = {
  headers: {
    'X-RapidAPI-Key': '6d167ce9a2msh9b0a5569b4bac65p1ad477jsnd02e5b2abf1e',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options)
    
    return response.data
  } catch (err) {
    console.log(err);
  }
}

