import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DailySalesOverview {
  dailyNetProfit: number;
  dailyTotalRevenue: number;
  dailyTotalSold: string;
  dailyBest: string;
}

const initialState: DailySalesOverview = {
  dailyNetProfit: 500,
  dailyTotalRevenue: 1200,
  dailyTotalSold: "50 items",
  dailyBest: "Fruits",
};

const dailySalesOverviewSlice = createSlice({
  name: "dailyOverview",
  initialState,
  reducers: {
    setDailyNetProfit: (state, action: PayloadAction<number>) => {
      state.dailyNetProfit = action.payload;
    },
    setDailyTotalRevenue: (state, action: PayloadAction<number>) => {
      state.dailyTotalRevenue = action.payload;
    },
    setDailyTotalSold: (state, action: PayloadAction<string>) => {
      state.dailyTotalSold = action.payload;
    },
    setDailyBest: (state, action: PayloadAction<string>) => {
      state.dailyBest = action.payload;
    },
  },
});

export const {
  setDailyNetProfit,
  setDailyTotalRevenue,
  setDailyTotalSold,
  setDailyBest,
} = dailySalesOverviewSlice.actions;

export default dailySalesOverviewSlice.reducer;
