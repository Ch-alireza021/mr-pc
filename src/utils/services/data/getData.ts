// import api from "@/src/config/base_url";
// import { URL_CATEGORY, URL_ORDERS, URL_SUBCATEGORY } from "../../config";

// import api from "@/src/config/base_url";
import {
  URL_CATEGORY,
  URL_PRODUCT,
  URL_SUBCATEGORY,
  URL_USER,
} from "@/src/config/url";
import { api } from "../interceptors/interceptors";

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

export const getCategory = async (id: string) => {
  const respons = await api.get(`${URL_CATEGORY}/${id}`);
  return respons.data;
};
// // -----------------------------------------------------------

export const getCategories = async () => {
  const respons = await api.get(`${URL_CATEGORY}?limit=${1000}`);
  return respons.data;
};
// // -----------------------------------------------------------
export const getCategoryLimit = async (page: number, limit: number) => {
  try {
    const respons = await api.get(
      `${URL_CATEGORY}?page=${page}&limit=${limit}`
    );
    console.log("Get all category successfully");
    return respons.data;
  } catch (error) {
    // console.log(`Get all category error:${error.message}`);
  }
};
// // -----------------------------------------------------------
// // -----------------------------------------------------------
export const getSubcategoryLimit = async (page: number, limit: number) => {
  try {
    const respons = await api.get(
      `${URL_SUBCATEGORY}?page=${page}&limit=${limit}`
    );
    console.log("Get all category successfully");
    return respons.data;
  } catch (error) {
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

export const getOrders = async (
  isDelivered: boolean,
  page: number,
  sortUp: boolean,
  limit: number,
  id: string | null
) => {
  const sortEarliestDatesUrl = `orders?page=${page}&limit=5&deliveryStatus=${isDelivered}&sort=-createdAt${
    id ? " &user=" + id : ""
  }`;
  const sortLatestDatestDateUrl = `orders?page=${page}&limit=5&deliveryStatus=${isDelivered}&sort=createdAt${
    id ? " &user=" + id : ""
  }`;
  const url = sortUp ? sortLatestDatestDateUrl : sortEarliestDatesUrl;
  const respons = await api.get(url);
  return respons.data;
};

export const getUser = async (page: number, limit: number) => {
  const respons = await api.get(`${URL_USER}?page=${page}&limit=${limit}`);
  return respons.data;
};
export const getUserById=async(id:string)=>{
    const respons=await api.get(`users/${id}`)
    return respons.data
}
export const getProducts = async (page: number, limit: number) => {
  const respons = await api.get(`${URL_PRODUCT}?page=${page}&limit=${limit}`);
  return respons.data;
};
// export const generalGet=async(URL)=>{
//     const respons=await api.get(`${URL}`)
//     return respons.data
// }

export const generalGetWithId = async (URL: string, id: string) => {
  const respons = await api.get(`${URL}/${id}`);
  return respons.data;
};

// export const getOrderById=async(id)=>{
//     const response=await api.get(`${URL_ORDERS}/${id}`);
//     return response.data.data.order
// }
