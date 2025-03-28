import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  
  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json',  
  },
});

const getData = async (endpoint) => {  
  try {
    const response = await api.get(endpoint);  
    return response.data;  
  } catch (error) {
    console.error('Error in GET request:', error);
 
  }
};

const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;  
  } catch (error) {
    console.error('Error in POST request:', error);
  }
};

export { getData, postData};
