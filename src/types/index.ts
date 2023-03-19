export type Value = string | undefined
export type Response = string | undefined

export type TypeFormatStingProps =
  | 'cnpj'
  | 'cpf'
  | 'phone'
  | 'postalCode'
  | 'cpfOurCnpj'
  | 'currency'
  | 'rg'
  | 'credCard'
  | 'obscureEmail'
  | 'number'

export type OptionsCurrency = Intl.NumberFormatOptions & {
  locale?: 'en-US' | 'pt-BR' | 'fr-FR' | 'it-IT' | 'pt-PT' | 'zh-CN' | 'ja-JP'
}

export type FormatStringProps = {
  type: TypeFormatStingProps
  value: Value
  prefix?: string
}

export type Record<K extends string, T> = {
  [P in K]: T
}
