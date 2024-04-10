

import { api } from "../interceptors/interceptors";


export const deleteData=async(URL,id)=>{
    try{
        const respons=await api.delete(`${URL}/${id}`)
        console.log("Deleting successfully!");
        return respons.data
    }catch (error) {
        console.error("Error deleting :", error);
    }
}