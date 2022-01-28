import React from "react";
import { Route, Switch } from 'react-router-dom'
import SignUpContainer from './session/signup_container';
import LoginContainer from "./session/login_container";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container'
import FeedIndex from "./feed/feed_index";
import ProfileContainer from "./profile/profile_container";
import ModalContainer from "./modal/modal_container";

const App = () => {
  return <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={ModalContainer}/>
    <Switch>
      <ProtectedRoute path="/users/:userId" component={ProfileContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer} />
      <AuthRoute exact path="/" component={LoginContainer} />
      <ProtectedRoute exact path="/feed" component={FeedIndex} />
    </Switch>
  </div>
}

export default App;