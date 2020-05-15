
export default (emittermodes,  { text, userId, emitterId, emitterModeId } ) => {
    console.log(`inside selectors/emittermodes with emitterId ${emitterId}`)
    return emittermodes.filter((emittermode) => {
        const emitterMatch = emittermode.emitterId === emitterId;
        return emitterMatch;
    }).sort((a,b) => {
        return a.sn < b.sn ? 1 : -1;
    });
};
