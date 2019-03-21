import React from 'react'
import moment from 'moment';
import ProfilePhoto from './ui/ProfilePhoto';

export default function PlayerListItem({ player }) {
  return (
    <div className="player">
      <ProfilePhoto imageUrl={player.photoURL} size="4rem" isRound={true} />
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
