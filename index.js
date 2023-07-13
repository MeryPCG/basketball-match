let countHomeEl = document.getElementById("count-home")
let countHome = 0

function increaseHomeScoreOne(){
    countHome += 1
    countHomeEl.textContent = countHome
}

function increaseHomeScoreTwo(){
    countHome += 2
    countHomeEl.textContent = countHome
}

function increaseHomeScoreThree(){
    countHome += 3
    countHomeEl.textContent = countHome
}

let countGuestEl = document.getElementById("count-guest")
let countGuest = 0

function increaseGuestScoreOne(){
    countGuest += 1
    countGuestEl.textContent = countGuest
}

function increaseGuestScoreTwo(){
    countGuest += 2
    countGuestEl.textContent = countGuest
}

function increaseGuestScoreThree(){
    countGuest += 3
    countGuestEl.textContent = countGuest
}