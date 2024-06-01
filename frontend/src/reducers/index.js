import { combineReducers } from "redux";
import cameraReducer from "./saveImage";
import textReducer from "./getText";

const rootReducer = combineReducers({
  camera: cameraReducer,
  text: textReducer,
});

export default rootReducer;
