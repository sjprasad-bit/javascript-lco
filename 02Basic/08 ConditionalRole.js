var usr = "abc"

switch (usr) {
    case "admin":
        console.log("You get full access");
        break;
    case "sudAdmin":
        console.log("You can upload and delete course");
        break;
    case "testpre":
        console.log("You can upload and delete test");
        break;
    case "usr":
        console.log("You can watch the content");
        break;
    default:
        console.log("trial usr");
        break;
}