import axios from "axios";

const URL = "http://192.168.1.137:8000";
const endpointDV = `${URL}/dlv/`;
const endpointTV = `${endpointDV}title/`;

export const downLoaderVideo = (url) => axios.post(endpointDV,{url: url}, {
          responseType: "blob",
        });
export const TitleVideo = (url) => axios.post(endpointTV, {url: url});


