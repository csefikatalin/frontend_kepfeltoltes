import axios from "axios";

let token=""
const csrf = () =>  axios.get('/sanctum/csrf-cookie').then(response => {
  console.log(response)
  token=response.data

});
export default axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true,
    withXSRFToken :true, 
    
})



//const csrf = () => axios.get("/sanctum/csrf-cookie");
/* let token = "";
const csrf = () =>
  axios.get("/token").then((response) => {
    console.log(response);
    token = response.data;
  }); */
//await csrf()
