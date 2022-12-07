import { configureStore } from "@reduxjs/toolkit";
import { StudentSlice } from "./StudentSlice.ts";
import { tynCounterSlice } from "./tynCounterSlice.ts";

const store = configureStore({
  reducer: {
    counter: tynCounterSlice.reducer,
    student: StudentSlice.reducer,
  },
});

export default store;
