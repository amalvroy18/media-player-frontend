import { commonApi } from "./commonApi"
import {serverUrl} from "./hostUrl"



//api to add video

/* import { commonApi } from "./commonApi" */

export const allVideoApi =async (reqBody)=>{
    return await commonApi("POST",`${serverUrl}/allVideos`,reqBody)
}

//api to get all the videos

export const getAllVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/allVideos`,"")
}

//api to delete video

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/allVideos/${id}`,{})
}

//api to add video to watch history

export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverUrl}/history`, reqBody)
}

//api to get all video into watch history

export const getVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete a video from history
export const deleteVideoHistoryApi =async(id)=>{
    return await commonApi ('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category 

export const addCategoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverUrl}/category`,reqBody)
}

//api t get all category

export const getAllCategoryApi =async()=>{
    return await commonApi ('GET',`${serverUrl}/category`)
}

//api to delete categoty

export const removeCategoryApi =async(id)=>{
    return await commonApi ('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to update a category

export const updateCategoryApi = async(id ,reqBody)=>{
    return await commonApi ('PUT',`${serverUrl}/category/${id}`,reqBody)
}

