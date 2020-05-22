
export default (generators, { text, userId, emitterId, emitterModeId, generatorId } ) => {
    console.log(`inside selectors/generators with emitterModeId ${emitterModeId}`)
    return generators.filter((generator) => {
        const generatorMatch = generator.modeId === emitterModeId || emitterModeId === '';
        return generatorMatch;
    }).sort((a,b) => {
        return a.sn < b.sn ? 1 : -1;
    });
};
