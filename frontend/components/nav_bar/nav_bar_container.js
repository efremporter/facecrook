import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { fetchAuthor } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAuthor: id => fetchAuthor(id)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
