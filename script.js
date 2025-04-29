function playGame(playerChoice) {
    const choices = ["Scissor", "Rock", "Paper"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "I WILL CRUSH YOU";
    } else if (
        (playerChoice === "Scissor" && computerChoice === "Paper") ||
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        result = "I'd win";
    } else {
        result = "Cmon lil kid";
    }

    document.getElementById("result").innerText = `Bạn chọn: ${playerChoice.toUpperCase()} 
    - Máy chọn: ${computerChoice.toUpperCase()} 
    => ${result}`;
}
