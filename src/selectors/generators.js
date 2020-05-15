
export default (generators, { text, userId, emitterId, emitterModeId } ) => {
    console.log(`inside selectors/generators with emitterModeId ${emitterModeId}`)
    return generators.filter((generator) => {
        const generatorMatch = generator.modeId === emitterModeId;
        return emitterMatch;
    }).sort((a,b) => {
        return a.sn < b.sn ? 1 : -1;
    });
};
