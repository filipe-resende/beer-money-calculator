export const FormatNumber = (value: string[]) => {
  const number = parseFloat(value.join('')) / 100;
  const displayNumber = isNaN(number) ? 0 : number;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(displayNumber);
};

export const GetCurrencyValue = (value: string[]): string => {
  const number = value.join('');
  const currencyValue = (parseFloat(number) / 100)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return currencyValue == 'NaN' ? '0' : currencyValue;
};