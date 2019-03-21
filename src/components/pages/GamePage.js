import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class GamePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      players: []
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Game Details</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
