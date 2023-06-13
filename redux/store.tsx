import { combineReducers, configureStore } from "@reduxjs/toolkit";

//db
import { categoryReducer } from "./actions";

import salesPreviewReducer from "./previewSalesSlice";
import salesDailyOverviewReducer from "./dailyOverviewSlice";
import salesMonthlyOverviewReducer from "./monthlyOverviewSlice";
const rootReducer = combineReducers({
  salesPreview: salesPreviewReducer,
  dailyOverview: salesDailyOverviewReducer,
  monthlyOverview: salesMonthlyOverviewReducer,
  categories: categoryReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
