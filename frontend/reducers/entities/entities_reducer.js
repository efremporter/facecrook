import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import UsersReducer from './users_reducer';
import CommentsReducer from './comments_reducer';
import LikesReducer from './likes_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  likes: LikesReducer
})

export default EntitiesReducer