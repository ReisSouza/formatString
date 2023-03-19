import { FormatStringProps, Response, Value } from './types';

export declare const cpfFormat: (value: Value) => Response;
export declare const cnpjFormat: (value: Value) => Response;
export declare const phoneFormat: (value: Value) => Response;
export declare const removeFormat: (value) => Response;
export declare const cpfOrCnpjFormat: (value: Value) => Response;
export declare const postalCodeFormat: (value: Value) => Response;
export declare const currencyFormat: (value: Value) => Response;
export declare const rgFormat: (value: Value) => Response;
export declare const numberFormat: (value: Value) => Response;
export declare const setFormat: ({ value, type, prefix }: FormatStringProps) => Response;
