import buildRequestURLParameters from './build-request-url-parameters';
import buildFormData from './build-form-data';
const processParameters = (method, parameters) => {
    if (method === 'GET') {
        if ('text' in parameters) {
            throw new Error('A GET request is not supported with validation by text');
        }
        return buildRequestURLParameters(parameters);
    }
    if (method === 'POST') {
        if ('url' in parameters) {
            throw new Error('A POST request is not supported with validation by URL');
        }
        return buildFormData(parameters);
    }
    throw new Error(`Parameter processing called with unrecognized method: ${method}`);
};
export default processParameters;
