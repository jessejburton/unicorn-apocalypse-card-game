import database from '../firebase/firebase';
import moment from 'moment';

// ADD_GAME
export const addGame = (game) => ({
  type: 'ADD_GAME',
  game
});

export const startAddGame = (gameData = {}) => {
  return (dispatch, getState) => {

    const {
      name = '',
      players = [],
      startedBy = ''
    } = gameData;

    const game = { name, players, startedAt: moment().toString(), startedBy };

    return database
      .ref(`games/`)
      .push(game)
      .then((ref) => {
        return dispatch(
          addGame({
            id: ref.key,
            ...game
          })
        );
      });
  };
};

// SET_GAMES - sets games state in store
export const setGames = (games) => ({
  type: 'SET_GAMES',
  games
});

export const startSetGames = () => {
  return (dispatch, getState) => {

    return database
      .ref(`games/`)
      .once('value')
      .then((snapshot) => {
        const games = [];

        snapshot.forEach((childSnapshot) => {
          const game = {
            id: childSnapshot.key,
            ...childSnapshot.val()
          }
          games.push(game);
        });

        dispatch(setGames(games));
      });
  };
};
