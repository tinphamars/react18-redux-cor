import { createSlice } from "@reduxjs/toolkit";

export interface Students {
  list: User[];
}

export type User = {
  id: string;
  userName: string;
};

const initialState: Students = {
  list: [
    {
      id: "uui-id-taisidk",
      userName: "Tin pham",
    },
  ],
};

export const StudentSlice = createSlice({
  name: "student",
  initialState,

  reducers: {
    AddStudent: (state) => {
      state.list.push({
        id: "uui-id-taisidk-newssddsd",
        userName: "Tin pham 10",
      });
    },
  },
});
export const { AddStudent } = StudentSlice.actions;
