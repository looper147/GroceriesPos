import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//database
import db from "../database/groceriesPos";

interface CategoryState {
  categories: string[];
}
let categoriesArr = [""];
//initial state is the fetched categories
//display categories
const showCategories = () => {
  return new Promise<string[]>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM category",
        [],
        (tx, results) => {
          const len = results.rows.length;
          const categoriesArr: string[] = [];
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            console.log(`Category ID: ${row.id}, Name: ${row.name}`);
            categoriesArr.push(row.name);
          }
          resolve(categoriesArr);
        },
        (error) => {
          reject("Error retrieving categories: " + error);
          return false;
        }
      );
    });
  });
};

const initialState: CategoryState = {
  categories: categoriesArr,
};
showCategories()
  .then((fetchedCategories) => {
    initialState.categories = fetchedCategories;
  })
  .catch((error) => {
    alert(error);
  });
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
