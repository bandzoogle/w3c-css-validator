export const boundaryLength = 34;
const getBoundary = () => {
    const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomBoundaryPiece = '';
    for (let i = 0; i < 10; i += 1) {
        randomBoundaryPiece += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }
    return `----CSSValidatorBoundary${randomBoundaryPiece}`;
};
export default getBoundary;
