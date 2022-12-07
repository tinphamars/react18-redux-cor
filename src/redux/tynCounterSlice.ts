import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  startNuber: number;
}

const initialState: CounterState = {
  startNuber: 10,
};

export const tynCounterSlice = createSlice({
  name: "counter",
  initialState,
  
  reducers: {
    AddOne: (state) => {
      state.startNuber += 1;
    },

    SubOne: (state) => {
      state.startNuber -= 1;
    },
  },
});

export const { AddOne, SubOne } = tynCounterSlice.actions;

// export default tynCounterSlice.reducer;
