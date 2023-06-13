import { createAction } from "@reduxjs/toolkit";

export const addCategory = createAction<string>("ADD_CATEGORY");

import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  categories: string[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCategory, (state, action: PayloadAction<string>) => {
    state.categories.push(action.payload);
  });
});
