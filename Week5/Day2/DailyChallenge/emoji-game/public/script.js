const emojiElement = document.getElementById("emoji");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");

const guessForm = document.getElementById("guessForm");
const saveForm = document.getElementById("saveForm");

const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");

const leaderboardElement = document.getElementById("leaderboard");

let questionId = null;

// Get a new random emoji
async function getQuestion() {
    try {
        const response = await fetch("/api/question");
        if (!response.ok) {
            throw new Error("Could not load question.");
        }

        const data = await response.json();

        questionId = data.id;
        emojiElement.textContent = data.emoji;
        scoreElement.textContent = data.score;

        optionsElement.innerHTML = "";
        feedbackElement.textContent = "";

        data.options.forEach(option => {
            const label = document.createElement("label");

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "guess";
            radio.value = option;
            radio.required = true;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(" " + option));

            optionsElement.appendChild(label);
        });

        submitBtn.disabled = false;
        nextBtn.disabled = true;

    } catch (error) {
        feedbackElement.textContent = error.message;
    }
}

// Submit the player's guess
guessForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const selected = document.querySelector(
        'input[name="guess"]:checked'
    );

    if (!selected) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    try {
        const response = await fetch("/api/guess", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: questionId,
                guess: selected.value
            })
        });

        if (!response.ok) {
            throw new Error("Could not submit answer.");
        }

        const result = await response.json();

        if (result.correct) {
            feedbackElement.textContent = "Correct! Well done!";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent =
                `Incorrect! The correct answer was ${result.answer}.`;
            feedbackElement.style.color = "red";
        }

        scoreElement.textContent = result.score;

        submitBtn.disabled = true;
        nextBtn.disabled = false;

    } catch (error) {
        feedbackElement.textContent = error.message;
    }
});

// Load the next emoji
nextBtn.addEventListener("click", getQuestion);

// Save the player's score
saveForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("playerName").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    try {
        const response = await fetch("/api/save-score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name })
        });

        if (!response.ok) {
            throw new Error("Could not save score.");
        }

        const result = await response.json();

        alert(result.message);

        saveForm.reset();
        await loadLeaderboard();
        await getQuestion();

    } catch (error) {
        feedbackElement.textContent = error.message;
    }
});

// Retrieve and display leaderboard
async function loadLeaderboard() {
    try {
        const response = await fetch("/api/leaderboard");

        if (!response.ok) {
            throw new Error("Could not load leaderboard.");
        }

        const players = await response.json();

        leaderboardElement.innerHTML = "";

        players.forEach(player => {
            const li = document.createElement("li");

            li.textContent = `${player.name}: ${player.score} points`;

            leaderboardElement.appendChild(li);
        });

    } catch (error) {
        console.error(error.message);
    }
}

// Start the game
getQuestion();
loadLeaderboard();