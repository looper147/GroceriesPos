import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SalesPreviewState {
  dailyIncome: number;
  dailyTop: string;
  monthlyIncome: number;
  monthlyTop: string;
}

const initialState: SalesPreviewState = {
  dailyIncome: 1154,
  dailyTop: "Apples",
  monthlyIncome: 37000,
  monthlyTop: "Orange",
};

const salesPreviewSlice = createSlice({
  name: "salesPreview",
  initialState,
  reducers: {
    setDailyIncome: (state, action: PayloadAction<number>) => {
      state.dailyIncome = action.payload;
    },
    setDailyTop: (state, action: PayloadAction<string>) => {
      state.dailyTop = action.payload;
    },
    setMonthlyIncome: (state, action: PayloadAction<number>) => {
      state.monthlyIncome = action.payload;
    },
    setMonthlyTop: (state, action: PayloadAction<string>) => {
      state.monthlyTop = action.payload;
    },
  },
});

export const { setDailyIncome, setDailyTop, setMonthlyIncome, setMonthlyTop } =
  salesPreviewSlice.actions;

export default salesPreviewSlice.reducer;
