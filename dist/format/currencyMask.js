"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currencyMask = (value) => {
    if (value === undefined)
        return undefined;
    const initialValue = +value
        .replace(/\D/g, '') / 100;
    return initialValue.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
exports.default = currencyMask;
