let mood = "Happy";
let health = "Good";

function feed() {
    mood = "Happy";
    updateStatus();
}

function play() {
    mood = "Excited";
    updateStatus();
}

function clean() {
    health = "Good";
    updateStatus();
}

function updateStatus() {
    document.getElementById("mood").innerText = "Mood: " + mood;
    document.getElementById("health").innerText = "Health: " + health;
}
