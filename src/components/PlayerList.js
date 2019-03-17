import React from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './PlayerListItem';

export const PlayerList = (props) => {

  console.log(props);
  return (
    <div>
      {props.players.map((player) => {
        return (
          <PlayerListItem key={player.id} player={player} />
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
