<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">react-input-mask-br</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ReisSouza/mask-Input-react-ptbr.svg)](https://github.com/ReisSouza/mask-Input-react-ptbr/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ReisSouza/mask-Input-react-ptbr.svg)](https://github.com/ReisSouza/mask-Input-react-ptbr/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
functionality that allows adding or removing mask to string, working with any react library, or html, react, and javascript</p>
<p align="center"> Available masks:</p>
<p align="center">CPF
| CNPJ
| CPFOURCNPJ
| RG
| PHONE
| CURRENCY
| POSTALCODE
| CREDCARD
| OBSCUREEMAIL
| NUMBER
</p>



# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Type](#type)
* [Properties setMask](#properties-setMask)
* [Usage sinle](#usage-single)
* [Exemples](#exemples)



# Installation
```npm i format-string-js```  Or  ```yarn add format-string-js```

# Usage

```
import {setMask } from "react-input-mask-br";

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


{
  cpf: '000.000.000-00',
  cnpj: '00.000.000.0000-00',
  cpfOurCnpj1: '000.000.000-00',
  cpfOurCnpj2: '00.000.000.0000-00',
  currency: '0,00',
  phone: '(00) 0 0000-0000',
  postalCode: '00000-000',
  rg: '00.000.000-0',
  credCard: '0000-0000-0000-0000',
  number: '000000000000',
  obscureEmail: 'u******@gmail.com'
}

const removeCPF = removeMask(maskCPF);
const removeCNPJ = removeMask(maskCNPJ);
const removeRG = removeMask(maskRG);
const removePostalCode = removeMask(maskPostCode);
const removePhone = removeMask(maskPhone);
const removeCurrency = removeMask(maskCurrency);
const removeCred = removeMask(maskCredCard);
const removeCPFORCNPJ1 = removeMask(maskCPFORCNPJ1);
const removeCPFORCNPJ2 = removeMask(maskCPFORCNPJ2);

console.log({
  removeCPF,
  removeCNPJ,
  removeRG,
  removePostalCode,
  removePhone,
  removeCurrency,
  removeCred,
  removeCPFORCNPJ1,
  removeCPFORCNPJ2,
});

{
  removeCPF: '00000000000',
  removeCNPJ: '00000000000000',
  removeRG: '000000000',
  removePostalCode: '00000000',
  removePhone: '000000000',
  removeCurrency: '100000000',
  removeCred: '0000000000000000',
  removeCPFORCNPJ1: '0.00',
  removeCPFORCNPJ2: '00000000000000'
}

```

# Properties setMask
|                           Name                            |               Type                | Default | Description |
|        :-----------------------------------------:        |    :-------------------------:    | :-----: | :--------------------------------------------------------------------- |
|                    **[`type`](#type)**                    |            `{String}`             |         | Mask format |
|                          **value**                        |            `{String}`             |         | string to be formatted |
|                         **Prefix**                        |            `{String}`             |         | Prefix added after formatted string


# Type

```
| CNPJ | CPFOURCNPJ | RG | PHONE | CURRENCY | POSTALCODE | CREDCARD
```

# Usage single

```
import {
  cpfMask, cnpjMask, cpfOurCnpjMask, credCardMask, currencyMask, phoneMask, postalCodeMask, rgMask,
} from "react-input-mask-br";

const cpf = cpfMask('00000000000');
const cnpj = cnpjMask('00000000000000');
const cpfOurCnpj1 = cpfOurCnpjMask('00000000000');
const cpfOurCnpj2 = cpfOurCnpjMask('00000000000000');
const currency = currencyMask('00000000000');
const phone = phoneMask('00000000000');
const postalCode = postalCodeMask('00000000000');
const rg = rgMask('000000000');
const credCard = credCardMask('0000000000000000');

console.log({
  cpf, cnpj, cpfOurCnpj1, cpfOurCnpj2, currency, phone, postalCode, rg, credCard,
});

{
  cpf: '000.000.000-00',
  cnpj: '00.000.000.0000-00',
  cpfOurCnpj1: '000.000.000-00',
  cpfOurCnpj2: '00.000.000.0000-00',
  currency: 'R$ 000.000.000,00',
  phone: '(00) 0 0000-0000',
  postalCode: '00000-000',
  rg: '00.000.000-0',
  credCard: '0000-0000-0000-0000'
}
```

## ✍️ Authors <a name = "authors"></a>

- [@ReisSouza](https://github.com/ReisSouza) - Idea & Initial work

See also the list of [contributors](https://https://github.com/ReisSouza) who participated in this project.


# Thanks
Thanks to [BrowserStack](https://www.browserstack.com/) for the help with testing on real devices
