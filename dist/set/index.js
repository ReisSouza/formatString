"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("../format");
const setMask = ({ value, type, prefix }) => {
    const asMaskSelect = {
        cnpj: (0, format_1.cnpjMask)(value),
        cpf: (0, format_1.cpfMask)(value),
        cpfOurCnpj: (0, format_1.cpfOurCnpjMask)(value),
        phone: (0, format_1.phoneMask)(value),
        postalCode: (0, format_1.postalCodeMask)(value),
        currency: (0, format_1.currencyMask)(value),
        rg: (0, format_1.rgMask)(value),
        credCard: (0, format_1.credCardMask)(value),
        obscureEmail: (0, format_1.obscureEmailMask)(value),
        number: (0, format_1.numberMask)(value),
        cardExpirationDate: (0, format_1.cardExpirationDateMask)(value)
    };
    const newValue = prefix
        ? `${prefix} ${asMaskSelect[type]}`
        : asMaskSelect[type];
    return newValue;
};
exports.default = setMask;
