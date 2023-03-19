import { Value } from '../types';

const postalCodeMask = (value: Value) => {
  if (value === undefined) return undefined;
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
};

export default postalCodeMask;
