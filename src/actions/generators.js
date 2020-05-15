import uuid from 'uuid';
import database from '../firebase/firebase';

// SET_GENERATOR
export const setGenerators = (generators) => ({
    type: 'SET_GENERATOR',
    generators
});

export const startSetGenerators = () => {
    console.log('inside startSetGenerators');

    return (dispatch, getState) => {

        return database.ref('generator').once('value').then((snapshot) => {
            const generators = [];

            snapshot.forEach((childSnapshot) => {
                generators.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setGenerators(generators));
        });
    };
};

