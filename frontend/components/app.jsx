import React from "react";
import { Route, Switch } from 'react-router-dom'
import SignUpContainer from './session/signup_container';
import LoginContainer from "./session/login_container";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container'
import FeedIndex from "./feed/feed_index";
import ProfileContainer from "./profile/profile_container";
import ModalContainer from "./modal/modal_container";
import PostModalContainer from "./modal/post_modal_container"
import FeedIndexContainer from "./feed/feed_index_container";
import PhotosIndexContainer from "./profile/photos_index_container";
import FriendsIndexContainer from "./friends/friends_index_container";

const App = () => {
  return <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Route path="/" component={ModalContainer}/>
    <ProtectedRoute path="/users/:userId" component={PostModalContainer}/>
    <ProtectedRoute exact path="/feed" component={PostModalContainer}/>
    <Switch>
      <ProtectedRoute path="/users/:userId" component={ProfileContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer} />
      <AuthRoute exact path="/" component={LoginContainer} />
      <ProtectedRoute exact path="/feed" component={FeedIndexContainer} />
    </Switch>
  </div>
}

export default App;