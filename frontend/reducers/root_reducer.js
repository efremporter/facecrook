import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import PostsReducer from './post_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  users: UsersReducer,
  posts: PostsReducer
})

export default RootReducer;