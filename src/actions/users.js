import uuid from 'uuid';
// import database from '../firebase/firebase';

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const startAddUser = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      userid = uid,
      informedConsent = true
    } = userData;
    const user = { userid, informedConsent };

    return database.ref(`user`).push(user).then((ref) => {
      dispatch(addUser({
        id: ref.key,
        ...user
      }));
    });
  };
};

// SELECT_USER
export const selectUser = (user) => ({
  type: 'SELECT_USER',
  user
});

export const startSelectUser = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(`inside startSelectUser uid ${uid}`);
    return database.ref(`user`).once('value').then((snapshot) => {
      const users = [];

      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.userid === uid)
        {
          console.log(`childSnapshot.uid: ${ childSnapshot.userid }`);
          console.log(`childSnapshot.userid === uid: ${ childSnapshot.userid === uid }`);
          
          users.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        }
      });

      dispatch(selectUser(users));
      console.log(`users count: ${users.length}`);

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
    return database.ref(`user`).once('value').then((snapshot) => {
        const users = [];

      snapshot.forEach((childSnapshot) => {
        users.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setUsers(users));
    });
  };
};