
export default (emittermodes, { text, emitterModeId, userId }) => {
    return emittermodes.filter((emittermode) => {
        const textMatch = emittermode.emitterId.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a,b) => {
        return a.sn < b.sn ? 1 : -1;
    });
};
