const age = 25;

if (age < 10) {
    console.log("Ticket Free")
} else if (age > 10 && age <= 30) {
    console.log("Discount 50%")
} else if (age >= 60) {
    console.log("Discount 15%")
} else {
    console.log("Ticket Price $800")
}