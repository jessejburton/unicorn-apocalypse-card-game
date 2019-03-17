import React from 'react';
import PlayerList from './PlayerList';

const MainMenuPage = (props) => (
  <div>
    <h1 className="heading">Main Menu</h1>
    <h2 className="heading">Players</h2>
    <PlayerList />
  </div>
);

export default MainMenuPage;
