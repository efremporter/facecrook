import React from "react";
import { Route, Switch } from 'react-router-dom'
import SignUpContainer from './session/signup_container';
import LoginContainer from "./session/login_container";
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container'
import FeedIndex from "./feed/feed_index";

const App = () => {
  return <div>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute exact path="/" component={FeedIndex} />
  </div>
}

export default App;