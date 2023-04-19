import { cnpjMask, cpfMask } from '.';
import { Value } from '../types';

const cpfOurCnpj = (value: Value) => {
  if (value.length <= 14) {
    return cpfMask(value);
  }
  return cnpjMask(value);
};

export default cpfOurCnpj;
