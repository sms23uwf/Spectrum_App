import uuid from 'uuid';
import database from '../firebase/firebase';

// SELECT_EMITTER_MODES
export const selectEmitterModes = (emittermodes) => ({
    type: 'SELECT_EMITTER_MODES',
    emittermodes
});

export const startSelectEmitterModes = (emitter) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref('mode/${emitter.key}').once('value').then((snapshot) => {
            const emittermodes = [];

            snapshot.forEach((childSnapshot) => {
                emittermodes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(selectEmitterModes(emittermodes));
        });
    };
};

// SET_EMITTER_MODE
export const setEmitterModes = (emittermodes) => ({
    type: 'SET_EMITTER_MODE',
    emittermodes
});

export const startSetEmitterModes = () => {
    console.log('inside startSetEmitterModes');

    return (dispatch, getState) => {

        return database.ref('mode').once('value').then((snapshot) => {
            const emittermodes = [];

            snapshot.forEach((childSnapshot) => {
                emittermodes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setEmitterModes(emittermodes));
        });
    };
};

