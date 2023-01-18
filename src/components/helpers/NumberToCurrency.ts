
const NumberToCurrency = (value: number | bigint) => {
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    return formatter.format(value)
}

  export default NumberToCurrency;