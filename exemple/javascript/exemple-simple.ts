import {
  cpfMask,
  cnpjMask,
  cpfOurCnpjMask,
  credCardMask,
  currencyMask,
  phoneMask,
  postalCodeMask,
  rgMask,
  obscureEmailMask,
  numberMask,
} from '../../src'

const cpf = cpfMask('00000000000')
const cnpj = cnpjMask('00000000000000')
const cpfOurCnpj1 = cpfOurCnpjMask('00000000000')
const cpfOurCnpj2 = cpfOurCnpjMask('00000000000000')
const currency = currencyMask('00000000000')
const phone = phoneMask('00000000000')
const postalCode = postalCodeMask('00000000000')
const rg = rgMask('000000000')
const credCard = credCardMask('0000000000000000')
const number = numberMask('0dasdas0000dasdasd0dasdasd0000dasdas0dasd0')
const obscureEmail = obscureEmailMask('user123@gmail.com')

console.log({
  cpf,
  cnpj,
  cpfOurCnpj1,
  cpfOurCnpj2,
  currency,
  phone,
  postalCode,
  rg,
  credCard,
  number,
  obscureEmail,
})

const currency1 = currencyMask('1')
const currency10 = currencyMask('10')
const currency100 = currencyMask('100')
const currency1000 = currencyMask('1000')
const currency10000 = currencyMask('10000')

console.log({ currency1, currency10, currency100, currency1000, currency10000 })
