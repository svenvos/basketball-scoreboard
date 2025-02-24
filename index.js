const homeTeam = document.getElementById("home-team");
const guestTeam = document.getElementById("guest-team");
const homePointsEl = document.getElementById("home-points-el");
const guestPointsEl = document.getElementById("guest-points-el");

let homePoints = 0;
let guestPoints = 0;

function addOnePointHome() {
    homePoints += 1;
    homePointsEl.textContent = homePoints;
    checkLeader()
}

function addTwoPointsHome() {
    homePoints += 2;
    homePointsEl.textContent = homePoints;
    checkLeader()
}

function addThreePointsHome() {
    homePoints += 3;
    homePointsEl.textContent = homePoints;
    checkLeader()
}

function addOnePointGuest() {
    guestPoints += 1;
    guestPointsEl.textContent = guestPoints;
    checkLeader()
}

function addTwoPointsGuest() {
    guestPoints += 2;
    guestPointsEl.textContent = guestPoints;
    checkLeader()
}

function addThreePointsGuest() {
    guestPoints += 3;
    guestPointsEl.textContent = guestPoints;
    checkLeader()
}

function newGame() {
    homePoints = 0;
    guestPoints = 0;
    homePointsEl.textContent = homePoints;
    guestPointsEl.textContent = guestPoints;
    checkLeader();
}

function checkLeader() {
    if (homePoints > guestPoints) {
        homeTeam.style.color = "#9aabd8";
        guestTeam.style.color = "#fff";
    } else if (guestPoints > homePoints) {
        guestTeam.style.color = "#9aabd8";
        homeTeam.style.color = "#fff";
    } else {
        guestTeam.style.color = "#fff";
        homeTeam.style.color = "#fff";
    }
}
