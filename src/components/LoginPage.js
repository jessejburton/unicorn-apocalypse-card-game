import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="login content-container">
    <span>prepare yourself for the...</span>
    <h1 className="logo-font">Unicorn Apocalypse</h1>
    <button className="button button--dark" onClick={startLogin}>
      Login with Google
      </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
