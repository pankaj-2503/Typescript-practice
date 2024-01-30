"use strict";
// --1
function greet(firstname) {
    console.log("hello" + firstname);
}
greet("pankaj");
function sum(a, b) {
    console.log(a + b);
}
sum(4, 9);
function isLegal(age) {
    if (age > 18)
        return true;
    else
        return false;
}
isLegal(24);
function another(fn) {
    setInterval(fn, 1000);
}
another(function () {
    console.log("hi there");
});
