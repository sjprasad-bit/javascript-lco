var num1 = 12;
var num2 = 14;

// calculate discount price on js
// formula d = (l-s)/l*100

var listingPrice = 14999;
var sellingPrice = 12999;
var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;
var discountPricePrecent = Math.round(discount);
console.log(discountPricePrecent + "% off");
console.log(typeof discountPricePrecent);