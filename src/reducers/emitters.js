const emittersReducerDefaultState = [];

export default (state = emittersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_EMITTERS':
            return action.emitters;
        default: 
            return state;
    }
};