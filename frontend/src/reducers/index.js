import { combineReducers } from "redux";
import cameraReducer from "./saveImage";

const rootReducer = combineReducers({
  camera: cameraReducer,

  //다른 리듀서들을 여기에 추가할 수 있습니다.
});

export default rootReducer;
