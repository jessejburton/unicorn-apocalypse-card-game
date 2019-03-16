import database, { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (user) => ({
  type: 'LOGIN',
  user
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}`)
      .update({ isOnline: false })
      .then((ref) => {
        return Promise.resolve(firebase.auth().signOut());
      });
  };
};
