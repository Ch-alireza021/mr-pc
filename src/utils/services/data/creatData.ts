// CREAT CATEGORY

import api from "@/src/config/base_url";

export const creatCat: (categoryName: string) => Promise<void> = async (
  categoryName
) => {
  try {
    const resCat = await api.post("/categories", {
      name: categoryName,
    });
    if (resCat.status === 201) {
      console.log("Category added successfully!");
      // return resCat.data.data.category._id;
    }
  } catch (error: any) {
    console.error("Error adding category:", error);
    throw error;
  }
};
// ----------------------------------------------------------------------
// CREAT SUBCATEGORY

export const creatSubCat = async (subCategoryName: string, id: string) => {
  try {
    const resSubCat = await api.post("subcategories", {
      category: id,
      name: subCategoryName,
    });
    console.log(resSubCat)
    console.log("SubCategory added successfully!");
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};
