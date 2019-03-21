
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_GAMES':
      return action.games;
    case 'ADD_GAME':
      return [action.game, ...state];
    default:
      return state;
  }
};