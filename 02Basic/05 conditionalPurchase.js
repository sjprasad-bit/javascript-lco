// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerfied = true;
var cardInfo = true;

// if (isLoggedIn) {
//   console.log("login success");
//   if (isEmailVerfied) {
//     console.log("Mail verfied");
//     if (cardInfo) {
//       console.log("You can make payment");
//     }
//   }
// }

if (isLoggedIn && isEmailVerfied && cardInfo) {
    console.log("You can make payment");
} else {
    console.log("Please check if you mate all required condition to make payment");
}