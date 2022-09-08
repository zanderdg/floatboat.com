import Axios from "axios";

// export const base_url = "http://192.168.100.252:8000";
export const base_url = "https://floatboat-backend.herokuapp.com";
// export const base_url = "http://localhost:8080";

export const publicAPI = Axios.create({ baseURL: base_url });

export const privateAPI = Axios.create({ baseURL: base_url });

export const attachToken = async () => {
  const jwt = localStorage.getItem("token");
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  //console.log("Token Attached");
};
