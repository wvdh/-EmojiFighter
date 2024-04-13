
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
