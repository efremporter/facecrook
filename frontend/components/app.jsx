import React from "react";
import { Route, Switch } from 'react-router-dom'
import SignupContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container'

const App = () => {
  return <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={SignupContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    {/* <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}
  </div>
}

export default App;