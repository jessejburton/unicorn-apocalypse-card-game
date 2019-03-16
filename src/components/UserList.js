import React from 'react';
import { connect } from 'react-redux';

export const UserList = (props) => {

  console.log(props);
  return (
    <div>
      <h2>Players</h2>
      {props.users.map((user) => {
        return <p key={user.id}>{user.displayName}</p>;
      })};
    </div>)
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  undefined
)(UserList);
