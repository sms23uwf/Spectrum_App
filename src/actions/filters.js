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

// SET_GENERATOR_FILTER
export const setGeneratorFilter = (generatorId = '') => ({
  type: 'SET_GENERATOR_FILTER',
  generatorId
});