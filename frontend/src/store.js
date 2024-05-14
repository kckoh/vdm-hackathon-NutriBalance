import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import cameraReducer from "./reducers/saveImage"; // cameraSlice에서 reducer를 import

const store = configureStore({
  reducer: {
    camera: cameraReducer, // `camera`라는 key로 cameraReducer를 매핑
  },
});

export default store;

export const useAppSelector = useSelector;
