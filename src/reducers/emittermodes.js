const emittermodesReducerDefaultState = [];

export default (state = emittermodesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_EMITTER_MODE':
            return action.emittermodes;
        default:
            return state;
    }
}