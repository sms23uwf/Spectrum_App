
export default (emitters, { text, userId, emitterId }) => {
    return emitters.filter((emitter) => {
        const textMatch = emitter.lnot.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort( (a,b) => {
        return a > b ? 1 : -1;
    });
};