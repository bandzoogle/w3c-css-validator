class BadStatusError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'BadStatusError';
    }
}
export default BadStatusError;
