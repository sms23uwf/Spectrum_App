import moment from 'moment/moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  userId: '',
  emitterId: '',
  emitterModeId: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_UUID_FILTER':
      return {
        ...state,
        userId: action.userId
      };
    case 'SET_EMITTER_FILTER':
      return {
        ...state,
        emitterId: action.emitterId
      };
    case 'SET_EMITTER_MODE_FILTER':
      return {
        ...state,
        emitterModeId: action.emitterModeId
      };
    case 'SET_GENERATOR_FILTER':
        return {
          ...state,
          generatorId: action.generatorId
      };
    default:
      return state;
  }
};
