import React from 'react'

export default function ProfilePhoto({ imageUrl, size, isRound, ...props }) {
  return (
    <div
      className={`profile__photo ${props.className || ''}`}
      style={{
        display: `inline-block`,
        width: size,
        height: size,
        borderRadius: isRound ? `50%` : 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`
      }}>
    </div>
  )
}
