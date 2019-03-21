import React from 'react';
import GameListItem from './GameListItem';

export const GameList = ({ games = [] }) => {
  console.log(games);
  return (
    <div className="content content--dark">
      {games.length > 0 ?
        games.map((game) => {
          return (
            <GameListItem key={game.id} {...game} />
          )
        })
        : (
          <p style={{ textAlign: "center", padding: "1rem" }}>You are currently not a part of any active Apocali.</p>
        )
      }
    </div>)
};

export default GameList;
