var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import validateOptions from '../validate-options';
import retrieveInBrowser from './browser';
import processParameters from './process-parameters';
const retrieveValidation = (method, unprocessedParameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
    validateOptions({
        timeout,
        medium: unprocessedParameters.medium,
        warningLevel: unprocessedParameters.warningLevel,
    });
    const parameters = processParameters(method, unprocessedParameters);
    return yield retrieveInBrowser(method, parameters, timeout);
});
export default retrieveValidation;
