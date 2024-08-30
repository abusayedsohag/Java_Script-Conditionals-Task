const yourScore = 100;
const friendScore = 25;

if (yourScore > 80) {
    if (friendScore > 80) {
        console.log("Go for lunch with your friend.")        
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log("good luck next time.")
    } else if (friendScore < 60 && friendScore >= 40) {
        console.log("keep your friend's message unseen.")
    } else {
        console.log("block your friend")
    }
} else {
    console.log("Go to home and sleep and act sad")
}