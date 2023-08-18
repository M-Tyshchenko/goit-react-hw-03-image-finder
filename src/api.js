import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '13806699-094791483596adb8f8eca5126';

export const fetchImages = async () => {
  const response = await axios.get(`/?key=${apiKey}`);
  return response.data.hits;
};
