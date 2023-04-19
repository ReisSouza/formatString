 const cardExpirationDate = (text: string) => {
    if (text === undefined) return undefined;
    return text
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1');
  };

  export default cardExpirationDate