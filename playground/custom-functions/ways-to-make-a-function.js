// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// Anonumous function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(first) {
//     return `Dr. ${firstName}`;
// };

// arrow function. alltid i en variabel
// function inchToCM(inches) {
//     const cm = inches * 2.54;
//     return cm;
// };

// function inchToCM(inches) {
//     return inches * 2.54;
// };

// const inchToCM = function(inches) {
//     return inches * 2.54;
// };

// ARROW FUNCTION
// const inchToCM = (inches) => {
//     return inches * 2.54;
// };

// sista förenklingen, RETURN behövs inte
// om det bara är ett argument behövs inte parenteser kring "inches"
const inchToCM = inches => inches * 2.54;

// om det man returnerar är ett objekt - sätt parentes runt. Ev lättare att inte använda arrow.
