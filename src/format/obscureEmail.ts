import { Value } from '../types';

const obscureEmail = (value: Value) => {
  if (value === undefined) return undefined;
  const [name, domain] = value.split('@');
  return `${name[0]}${new Array(name.length).join('*')}@${domain}`;
};

export default obscureEmail;
