import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  baseURL: "http://127.0.0.1:5001/clone-5922f/us-central1/api",

  // deployed version of firebase function 
  // baseURL: "https://api-72eddpjw7a-uc.a.run.app",
});

export { axiosInstance };
