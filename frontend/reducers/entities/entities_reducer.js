import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import UsersReducer from './users_reducer';
import CommentsReducer from './comments_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  comments: CommentsReducer
})

export default EntitiesReducer