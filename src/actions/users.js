import database from '../firebase/firebase';

// ADD_USER
export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const startAddUser = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      displayName = '',
      email = '',
      photoURL = ''
    } = userData;
    const user = { displayName, email, photoURL, isOnline: true };

    return database
      .ref(`users/${uid}/`)
      .set(user)
      .then((ref) => {
        dispatch(
          addUser({
            ...user
          })
        );
      });
  };
};

// SET_USERS
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch, getState) => {

    return database
      .ref(`users/`)
      .once('value')
      .then((snapshot) => {
        const users = [];

        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.val().isOnline) {
            users.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          }
        });

        dispatch(setUsers(users));
      });
  };
};
