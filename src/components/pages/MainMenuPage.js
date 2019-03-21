import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PlayerList from '../PlayerList';
import GameList from '../GameList';

export const MainMenuPage = ({ players, games }) => {
  return (
    <div>
      <Link className="begin-game button button--primary" to="/new" >
        Begin an Apocalypse!
      </Link>
      <GameList games={games} />
      <h2 className="heading">Players</h2>
      <PlayerList players={players} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    games: state.games
  };
};

export default connect(
  mapStateToProps,
  undefined
)(MainMenuPage);

