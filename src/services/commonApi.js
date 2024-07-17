import axios from "axios";


export const commonApi =(httpRequest,url,reqBody)=>{
    const reqConfig ={
        method: httpRequest,
  url,
  data: reqBody,
  headers:{"Content-Type":"application/json"}
}


return axios(reqConfig).then((result)=>{
    return result
}).catch((err)=>{
    return err
})
}