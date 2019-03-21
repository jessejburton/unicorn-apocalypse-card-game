import React from 'react';
import PlayerListItem from './PlayerListItem';

export const PlayerList = ({ players = [] }) => {
  return (
    <div>
      {players.map((player) => {
        return (
          <PlayerListItem key={player.id} player={player} />
        )
      })}
    </div>)
};

export default PlayerList;