import { combineReducers } from "redux";
import cameraReducer from "./saveImage";
import textReducer from "./getText";

const rootReducer = combineReducers({
  camera: cameraReducer,
  textReducer,
});

export default rootReducer;
