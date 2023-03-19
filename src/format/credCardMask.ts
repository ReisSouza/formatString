import { Value } from '../types';

const credCardMask = (value: Value) => {
  if (value === undefined) return undefined;
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

export default credCardMask;
