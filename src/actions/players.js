import database from '../firebase/firebase';
import moment from 'moment';

// ADD_PLAYER
export const addPlayer = (player) => ({
  type: 'ADD_PLAYER',
  player
});

export const startAddPlayer = (playerData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      displayName = '',
      email = '',
      photoURL = ''
    } = playerData;

    const player = { displayName, email, photoURL, isOnline: true, lastSeen: moment().toString() };

    return database
      .ref(`players/${uid}/`)
      .set(player)
      .then((ref) => {
        dispatch(
          addPlayer({
            ...player
          })
        );
      });
  };
};

// SET_PLAYERS - sets players state in store
export const setPlayers = (players) => ({
  type: 'SET_PLAYERS',
  players
});

export const startSetPlayers = () => {
  return (dispatch, getState) => {

    return database
      .ref(`players/`)
      .once('value')
      .then((snapshot) => {
        const players = [];

        snapshot.forEach((childSnapshot) => {
          const player = {
            id: childSnapshot.key,
            ...childSnapshot.val()
          }
          players.push(player);
        });

        dispatch(setPlayers(players));
      });
  };
};
