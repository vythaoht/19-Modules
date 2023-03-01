//Thu vien axios dung cu phap require va module.exports cua nodejs, nen ta ko the su dung cu phap import cua ES6 de su dung
// import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
// import axios from "../node_modules/axios/dist/esm/axios.min.js";

//Sau tat ca, khi sinh ra file dist:::
import axios from "axios";

const URL = "https://63e86419ac3920ad5beb7b3b.mockapi.io/api/products";

export function getProducts() {
  return axios({
    method: "GET",
    url: URL,
  });
}
