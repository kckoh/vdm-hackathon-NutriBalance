import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  extractedText: "",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    getExtractedText: (state, action) => {
      console.log(action);
      state.extractedText = action.payload;
    },
  },
});

export const { getExtractedText } = textSlice.actions;

export default textSlice.reducer;
