import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  extractedText: [
    { id: 0, value: "hello" },
    { id: 1, value: "hi" },
  ],
  // nextId: 0,
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    getExtractedText: (state, action) => {
      return initialState;
      // state.extractedText.push({ id: state.nextId, ...action.payload });
      // state.nextId++;
    },
    //remove extracted text from the state
    removeExtractedText: (state, action) => {
      state.extractedText = state.extractedText.filter(
        (text) => text.id !== action.payload
      );
    },
  },
});

export const { getExtractedText, removeExtractedText } = textSlice.actions;

export default textSlice.reducer;
