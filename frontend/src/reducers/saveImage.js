import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    saveImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { saveImage } = cameraSlice.actions;

export default cameraSlice.reducer;
