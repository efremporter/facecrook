import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import UI_Reducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: sessionReducer,
  ui: UI_Reducer
})

export default RootReducer;