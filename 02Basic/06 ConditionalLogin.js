// Allow user to access course if he is: 
// logged in from email
// logged in from Google
// logged in from Facebook

var isLoggedInFromMail = false
var isLoggedInFromGoogle = false
var isLoggedInFromFacebook = false

if (isLoggedInFromMail || isLoggedInFromGoogle || isLoggedInFromFacebook) {
    console.log("Login Success");
} else {
    console.log("please login in from one of the services");
}