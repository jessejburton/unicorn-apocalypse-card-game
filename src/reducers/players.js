
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYERS': {
      return action.players;
    }
    default:
      return state;
  }
};
