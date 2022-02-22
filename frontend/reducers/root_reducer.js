import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import EntitiesReducer from './entities/entities_reducer';
import UI_Reducer from './ui/ui_reducer';
import ErrorsReducer from './errors/errors_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: sessionReducer,
  ui: UI_Reducer,
  errors: ErrorsReducer
})

export default RootReducer;