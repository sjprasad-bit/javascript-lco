const uid = "ABC001";

var fName = "Prasad";
var lName = "Junghare";
var mail = "temp@mail.com";
var password = "12345";
var courseCount = 0;
var isLoggedInFacebook = false;

console.log(uid);
console.log(fName);
console.log("Your Full Name is ", fName, lName);
console.log("Your mail is " + mail);

console.log(`
    profile
    uid: ${uid}
    Your mail: ${mail}
    Your password: ${password}
    Is logged through Facebook: ${isLoggedInFacebook}
`);
