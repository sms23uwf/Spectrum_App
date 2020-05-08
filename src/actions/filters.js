// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_UUID_FILTER
export const setUUIDFilter = (userId = '') => ({
  type: 'SET_UUID_FILTER',
  userId
});

// SET_EMITTER_FILTER
export const setEmitterFilter = (emitterId = '') => ({
  type: 'SET_EMITTER_FILTER',
  emitterId
});

// SET_EMITTER_MODE_FILTER
export const setEmitterModeFilter = (emitterModeId = '') => ({
  type: 'SET_EMITTER_MODE_FILTER',
  emitterModeId
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
