import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import DD from './DD';

const Auth = ({ path, isAuthed }) => (
  <Route
    path={path}
    exact
    render={(props) =>
      isAuthed ? <DD {...props} /> : <Redirect to="/login" />
    // <div>hi</div>
    }
  />
);

const MSTP = (state) => ({
  isAuthed: state.auth.isAuthed,
});

export default withRouter(connect(MSTP)(Auth));