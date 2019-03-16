import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => {

  const user = { ...props.auth.user };

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>Unicorn Apocalypse</h1>
          </Link>
          <h2>Welcome, {user.displayName}</h2>
          <button className="button button--link" onClick={props.startLogout}>
            Logout
        </button>
        </div>
      </div>
    </header>)
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.users
  };
};


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
