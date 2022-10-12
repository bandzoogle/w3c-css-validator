var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as https from 'https';
import BadStatusError from './bad-status-error';
import { boundaryLength } from './get-boundary';
import { TextEncoder } from 'util';
const retrieveInNode = (method, parameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const req = https.request(`https://jigsaw.w3.org/css-validator/validator${method === 'GET' ? parameters : ''}`, Object.assign({ method,
            timeout }, (method === 'POST'
            ? {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${parameters.slice(2, boundaryLength + 2)}`,
                    'Content-Length': String(new TextEncoder().encode(parameters).byteLength),
                },
            }
            : {})), (res) => {
            var _a;
            if (typeof res.statusCode === 'number' && (res.statusCode < 200 || res.statusCode >= 300)) {
                reject(new BadStatusError((_a = res.statusMessage) !== null && _a !== void 0 ? _a : '', res.statusCode));
            }
            let data = '';
            res.on('data', (chunk) => {
                try {
                    data += chunk;
                }
                catch (error) {
                    reject(error);
                }
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data).cssvalidation);
                }
                catch (error) {
                    reject(error);
                }
            });
        });
        if (method === 'POST') {
            req.write(parameters);
        }
        req.on('timeout', () => {
            reject(new Error(`The request took longer than ${timeout}ms`));
        });
        req.end();
    });
});
export default retrieveInNode;
