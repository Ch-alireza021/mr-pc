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
// export const creatCat = async (categoryName, subCategoryName) => {
//   try {
//     const resCat = await api.post("/categories", {
//       name: categoryName,
//     });
//     if (resCat.status === 201) {
//       console.log("Category added successfully!");
//       {
//         const resSubCat = await api.post("subcategories", {
//           category: resCat.data.data.category._id,
//           name: subCategoryName,
//         });
//         if (resSubCat.status === 201) {
//           console.log("SubCategory added successfully!");
//           return {
//             category: resCat.data.data.category._id,
//             subCategory: resSubCat.data.data.subcategory._id,
//           };
//         } else {
//           console.log("Failed to add category");
//         }
//       }
//     } else {
//       console.log("Failed to add category");
//     }
//   } catch (error) {
//     console.error("Error adding category:", error);
//   }
// };
// ----------------------------------------------------------------------
// CREAT SUBCATEGORY

export const creatSubCat = async (id: string, subCategoryName: string) => {
  try {
    const resSubCat = await api.post("subcategories", {
      category: id,
      name: subCategoryName,
    });
    if (resSubCat.status === 201) {
      console.log("SubCategory added successfully!");
      return {
        subCategory: resSubCat.data.data.subcategory._id,
      };
    } else {
      console.log("Failed to add Subcategory");
    }
  } catch (error) {
    console.error("Error adding category:", error);
  }
};
