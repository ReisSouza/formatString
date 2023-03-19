import { Value } from '../types';

const currencyMask = (value: Value) => {
  if (value === undefined) return undefined;
  const initialValue = +value
    .replace(/\D/g, '') / 100;

  return initialValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
export default currencyMask;
