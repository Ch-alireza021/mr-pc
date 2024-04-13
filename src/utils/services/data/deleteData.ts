// import { api } from "../interceptors/interceptors";

import api from "@/src/config/base_url";
import { URL_CATEGORY } from "@/src/config/url";

export const deleteData=async(URL:string,id:string)=>{
    try{
        const respons=await api.delete(`${URL}/${id}`)
        console.log("Deleting successfully!");
        return respons.data
    }catch (error) {
        console.error("Error deleting :", error);
    }
}
// -----------------------------------------------------------

