//Function to convert PriceCents --> Dollar
export function formatCurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2);
}


//Function to convert Dollar --> Pricecents
export function formatDollartoCents(dollar){
    return (Math.round(dollar*100)).toFixed(2);
}

//Function to calculate the tax
export function taxCalculator(priceCents)
{
    let totatPaymentIncludingTax=(priceCents * 13)/100
    return totatPaymentIncludingTax;
}

//Function to calculate discount passing cents and percentage
export function calculateDiscountValue(priceCents, discountPercent) {
    const discountAmount = (priceCents * discountPercent) / 100;
    return discountAmount;
}

// function returns apply discount price
export function calculateApplyDiscount(priceCents, discountAmount){
    const finalPrice = priceCents - discountAmount;
    return Math.round(finalPrice); 
}




   