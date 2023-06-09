"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rgMask = (value) => {
    if (value === undefined)
        return undefined;
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{1})\d+?$/, '$1');
};
exports.default = rgMask;
