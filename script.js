function playGame(playerChoice) {
    const choices = ["kéo", "búa", "bao"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "T nhả tí thôi";
    } else if (
        (playerChoice === "kéo" && computerChoice === "bao") ||
        (playerChoice === "búa" && computerChoice === "kéo") ||
        (playerChoice === "bao" && computerChoice === "búa")
    ) {
        result = "Rùa";
    } else {
        result = "Non thì nín";
    }

    document.getElementById("result").innerText = `Bạn chọn: ${playerChoice.toUpperCase()} 
    - Máy chọn: ${computerChoice.toUpperCase()} 
    => ${result}`;
}
