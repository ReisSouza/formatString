"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number = (value) => {
    if (value === undefined)
        return undefined;
    return value
        .replace(/\D/g, '');
};
exports.default = number;
