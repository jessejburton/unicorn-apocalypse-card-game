import React from 'react'
import moment from 'moment';

export default function PlayerListItem(props) {

  const player = props.player;

  return (
    <div className="player">
      <div className="player__photo">
        <div className="player__photo-container">
          <img src={player.photoURL} />
        </div>
      </div>
      <div className="player__details">
        <div className="player__name">{player.displayName}</div>
        <div className="player__status">
          <span className="player__last">
            {player.isOnline ? (
              <span>online</span>
            ) : (
                <span>last seen @ {moment(player.lastSeen).format("h:mma on MMM Do, YYYY")}</span>
              )}
          </span>
        </div>
      </div>
      <div className={`player__status-icon ${player.isOnline ? 'online' : 'offline'}`}></div>
    </div >
  )
}
