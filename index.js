
/*
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let battle = []

fightButton.addEventListener("click", function() {
    let firstEmoji = getRandomEmoji()
    let secondEmoji = getRandomEmoji()
    battle = [firstEmoji, secondEmoji]
    function getRandomEmoji() {
    let randomIndex = Math.floor( Math.random() * 17)
    return fighters[randomIndex]
    } renderGame()
}

function renderGame() {
    stageEl.textContent = "Fights: "
    for (let i = 0; i < battle.length; i++) 
    stageEl.textContent += battle[i] + " "
    }
*/
let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let battle = []

fightButton.addEventListener("click", function() {
    let firstEmoji = getRandomEmoji()
    let secondEmoji = getRandomEmoji()
    battle = [firstEmoji, secondEmoji]
    renderGame()
})

function getRandomEmoji() {
    let randomIndex = Math.floor(Math.random() * 17)
    return fighters[randomIndex]
}

function renderGame() {
    stageEl.textContent = "Fights: "
    for (let i = 0; i < battle.length; i++) {
        stageEl.textContent += battle[i]
        if (i < battle.length - 1) { // Add "vs" between emojis
            stageEl.textContent += " vs "
        }
    }
}

// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random 
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.