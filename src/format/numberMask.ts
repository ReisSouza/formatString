import { Value } from '../types';

const number = (value: Value) => {
  if (value === undefined) return undefined;
  return value
    .replace(/\D/g, '');
};

export default number;
