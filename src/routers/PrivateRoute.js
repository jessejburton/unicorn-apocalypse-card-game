import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/layout/Header';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/layout/Footer';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div className="authenticated">
            <Header />
            <Navigation />
            <div className="content-container">
              <Component {...props} />
            </div>
            <Footer />
          </div>
        ) : (
            <Redirect to="/" />
          )
      }
    />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
