import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MonthlySalesOverview {
  monthlyNetProfit: number;
  monthlyTotalRevenue: number;
  monthlyTotalSold: string;
  monthlyBest: string;
}

const initialState: MonthlySalesOverview = {
  monthlyNetProfit: 4552,
  monthlyTotalRevenue: 1300,
  monthlyTotalSold: "563 items",
  monthlyBest: "Vegetables",
};

const monthlySalesOverviewSlice = createSlice({
  name: "monthlyOverview",
  initialState,
  reducers: {
    setMonthlyNetProfit: (state, action: PayloadAction<number>) => {
      state.monthlyNetProfit = action.payload;
    },
    setMonthlyTotalRevenue: (state, action: PayloadAction<number>) => {
      state.monthlyTotalRevenue = action.payload;
    },
    setMonthlyTotalSold: (state, action: PayloadAction<string>) => {
      state.monthlyTotalSold = action.payload;
    },
    setMonthlyBest: (state, action: PayloadAction<string>) => {
      state.monthlyBest = action.payload;
    },
  },
});

export const {
  setMonthlyNetProfit,
  setMonthlyTotalRevenue,
  setMonthlyTotalSold,
  setMonthlyBest,
} = monthlySalesOverviewSlice.actions;

export default monthlySalesOverviewSlice.reducer;
