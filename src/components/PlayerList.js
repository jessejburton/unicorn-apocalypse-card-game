import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export const PlayerList = (props) => {

  console.log(props);
  return (
    <div>
      <h2>Players</h2>
      {props.players.map((player) => {
        return (
          <div className="player" key={player.id}>
            <div className="player__name">{player.displayName}</div>
            <div className="player__status">
              {player.isOnline ? 'online' : 'offline'}
              last seen {moment(player.lastSeen).format("MMM Do, YYYY @ hh:mma")}
            </div>
          </div>
        )
      })}
    </div>)
};

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

export default connect(
  mapStateToProps,
  undefined
)(PlayerList);
