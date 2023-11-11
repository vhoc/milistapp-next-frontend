export const toMoneyString = ( number: number, symbol: string = "" ): string => {

    // const stringNumber = String(number)
    const stringNumber = number.toLocaleString( 'en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2, useGrouping: true, } )
    return `${symbol} ${stringNumber}`
    // return symbol + stringNumber.substring( 0, stringNumber.length - 2 ) + "." + stringNumber.substring(stringNumber.length - 2)

}