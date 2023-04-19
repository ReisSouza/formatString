import {
  cnpjMask,
  cpfMask,
  cpfOurCnpjMask,
  credCardMask,
  currencyMask,
  phoneMask,
  postalCodeMask,
  numberMask,
  obscureEmailMask,
  cardExpirationDateMask,
  rgMask,
} from '../format'
import { FormatStringProps, TypeFormatStingProps } from '../types'

const setMask = ({ value, type, prefix }: FormatStringProps): string => {
  const asMaskSelect: Record<TypeFormatStingProps, string> = {
    cnpj: cnpjMask(value),
    cpf: cpfMask(value),
    cpfOurCnpj: cpfOurCnpjMask(value),
    phone: phoneMask(value),
    postalCode: postalCodeMask(value),
    currency: currencyMask(value),
    rg: rgMask(value),
    credCard: credCardMask(value),
    obscureEmail: obscureEmailMask(value),
    number: numberMask(value),
    cardExpirationDate: cardExpirationDateMask(value)
  }

  const newValue = prefix
    ? `${prefix} ${asMaskSelect[type]}`
    : asMaskSelect[type]
  return newValue
}

export default setMask
