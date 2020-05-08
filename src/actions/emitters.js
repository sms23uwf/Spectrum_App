import uuid from 'uuid';
import database from '../firebase/firebase';

// lnot: 'WXG589',
// elint: 'el2',
// nsn: 'nsn2',
// code_type: 'ct2',
// nick: 'wagshall deli',
// antenna_type: 'type1'

// SET EMITTERS
export const setEmitters = (emitters) => ({
    type: 'SET_EMITTERS',
    emitters
});

export const startSetEmitters = () => {
    console.log('inside startSetEmitters');

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref('emitter').once('value').then((snapshot) => {
            const emitters = [];

            snapshot.forEach((childSnapshot) => {
                emitters.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setEmitters(emitters));
        });
    };
};

