import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";

const UI_Reducer = combineReducers({
  modal: ModalReducer
})

export default UI_Reducer;