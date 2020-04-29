// import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    // return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  console.log(`inside startLogout`);
  return () => {
    // return firebase.auth().signOut();
  };
};

export const cancelLogin = () => {
  return () => {
    // return firebase.auth().signOut().then(firebase.auth().currentUser.refreshToken);
  };
};
