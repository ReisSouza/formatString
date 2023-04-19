"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postalCodeMask = (value) => {
    if (value === undefined)
        return undefined;
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
};
exports.default = postalCodeMask;
