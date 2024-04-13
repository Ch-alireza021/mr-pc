import api from "@/src/config/base_url";
import { URL_CATEGORY, URL_SUBCATEGORY } from "@/src/config/url";

export const editCategory: (
  categoryName: string,
  id: string
) => Promise<void> = async (categoryName, id) => {
  try {
    const resCat = await api.patch(`${URL_CATEGORY}/${id}`, {
      name: categoryName,
    });
    console.log(resCat.statusText);
    if (resCat.statusText === "OK") {
      console.log("Category edit successfully!");
    }
  } catch (error: any) {
    console.error("Error adding category:", error);
    throw error;
  }
};

export const editSubCategory = async (
  name: string,
  cat: string,
  id: string
) => {
  try {
    const resSubcategory = await api.patch(`${URL_SUBCATEGORY}/${id}`, {
      category: cat,
      name: name,
    });
    console.log(resSubcategory);
    console.log("Subategory edit successfully!")
  } catch (error) {
    throw(error)
  }
};
