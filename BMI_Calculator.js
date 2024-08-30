const weight = 102;
const height = 1.75;
const bmi = weight / (height * height);
console.log("BMI: ", bmi);

if (bmi  < 18.5) {
    console.log("You are underweight.");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal.");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
}
else {
    console.log("You are obese.");
}