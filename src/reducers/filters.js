import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  emitterId: '',
  emitterModeId: '',
  userId: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
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
        emitterid: action.emitterId
      };
      case 'SET_EMITTER_MODE_FILTER':
      return {
        ...state,
        emittermodeid: action.emitterModeId
      };
    default:
      return state;
  }
};
