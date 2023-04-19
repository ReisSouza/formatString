"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obscureEmail = (value) => {
    if (value === undefined)
        return undefined;
    const [name, domain] = value.split('@');
    return `${name[0]}${new Array(name.length).join('*')}@${domain}`;
};
exports.default = obscureEmail;
