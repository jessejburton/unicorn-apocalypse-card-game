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
          <div className="header__logo">
            <h1 className="header__logo-text">Unicorn Apocalypse</h1>
          </div>
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
