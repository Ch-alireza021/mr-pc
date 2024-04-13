// import api from "@/src/config/base_url";
// import { URL_CATEGORY, URL_ORDERS, URL_SUBCATEGORY } from "../../config";

import api from "@/src/config/base_url";
import { URL_CATEGORY, URL_SUBCATEGORY } from "@/src/config/url";

// export const getProducts=async(page,category)=>{
//     const respons=category ?await api.get(`products?page=${page}&limit=5&category=${category}`):await api.get(`products?page=${page}&limit=5&sort=-createdAt`);
//     return respons.data;
// };
// // -----------------------------------------------------------

// export const getCustomProducts=async({page=1,filter})=>{
//     const respons=await api.get(`products?page=${page}&limit=500&${filter}`);
//     return respons.data;
// };
// // -----------------------------------------------------------

export const getCategory=async(id:string)=>{
    const respons=await api.get(`${URL_CATEGORY}/${id}`);
    return respons.data;
};
// // -----------------------------------------------------------

export const getCategories=async()=>{
    const respons=await api.get(`${URL_CATEGORY}?limit=${1000}`);
    return respons.data;
};
// // -----------------------------------------------------------
export const getCategoryLimit=async(page:number,limit:number)=>{
    try{
        const respons=await api.get(`${URL_CATEGORY}?page=${page}&limit=${limit}`);
        console.log("Get all category successfully");
        return respons.data;
    }catch(error){
        // console.log(`Get all category error:${error.message}`);
    }
};
// // -----------------------------------------------------------
// // -----------------------------------------------------------
export const getSubcategoryLimit=async(page:number,limit:number)=>{
    try{
        const respons=await api.get(`${URL_SUBCATEGORY}?page=${page}&limit=${limit}`);
        console.log("Get all category successfully");
        return respons.data;
    }catch(error){
        // console.log(`Get all category error:${error.message}`);
    }
};
// // -----------------------------------------------------------
// export const getSubCategoryLimit=async(limit)=>{
//     try{
//         const respons=await api.get(`${URL_SUBCATEGORY}?limit=${limit}`);
//         console.log("Get all SubCategory successfully");
//         return respons.data;
//     }catch(error){
//         console.log(`Get all SubCategory error:${error.message}`);
//     }
// };
// // -----------------------------------------------------------

// export const getOrders=async(isSend,page,earliest,id)=>{
//     const sortEarliestDatesUrl=`orders?page=${page}&limit=5&deliveryStatus=${isSend}&sort=-createdAt${id ? " &user="+id:""}`;
//     const sortLatestDatestDateUrl=`orders?page=${page}&limit=5&deliveryStatus=${isSend}&sort=createdAt${id ? " &user="+id:""}`
//     const url=earliest ? sortEarliestDatesUrl : sortLatestDatestDateUrl
// const respons=await api.get(url);
// return respons.data
// }

// export const getUser=async(id)=>{
//     const respons=await api.get(`users/${id}`)
//     return respons.data
// }
// export const generalGet=async(URL)=>{
//     const respons=await api.get(`${URL}`)
//     return respons.data
// }

// export const generalGetWithId=async(URL,id)=>{
//     const respons=await api.get(`${URL}/${id}`)
//     return respons.data
// }

// export const getOrderById=async(id)=>{
//     const response=await api.get(`${URL_ORDERS}/${id}`);
//     return response.data.data.order
// }