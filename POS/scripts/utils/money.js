//Function to convert PriceCents --> Dollar
export function formatCurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2);
}

//Function to calculate the tax
export function taxCalculator(priceCents)
{
    let totatPaymentIncludingTax=(priceCents * 13)/100
    return totatPaymentIncludingTax;

}