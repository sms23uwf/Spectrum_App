const generatorssReducerDefaultState = [];

export default (state = generatorssReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_GENERATOR':
            return action.generators;
        default:
            return state;
    }
}