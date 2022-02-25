import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept' : 'application/json'
  }
});

export async function getAccessToken() {
  let data = qs.stringify({
    grant_type: "password",
    username: process.env.REACT_APP_API_USERNAME,
    password: process.env.REACT_APP_API_PASSWORD,
  })
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  const response = await instance.post('/token', data, headers)
  return response;
}


export async function getProducts(token) {
  let response ='';
  if(token) {
    response = await instance.get('/billing/products',  { headers : {
      'Authorization' : 'Bearer '+ token
    }})
  }

  return response;
}

export default instance;
