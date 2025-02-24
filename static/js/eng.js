
// Task
const sentences = [
    { sentence: "1. I ___ (to eat) breakfast every morning.", correct: "eat" },
    { sentence: "2. She ___ (to go) to school by bus.", correct: "goes" },
    { sentence: "3. They ___ (to play) football on weekends.", correct: "play" },
    { sentence: "4. He ___ (to read) a book now.", correct: "is reading" },
    { sentence: "5. We ___ (to watch) a movie tonight.", correct: "are watching" },
    { sentence: "6. You ___ (to do) your homework every day.", correct: "do" },
    { sentence: "7. The cat ___ (to sleep) on the couch.", correct: "is sleeping" },
    { sentence: "8. My brother ___ (to play) video games.", correct: "plays" },
    { sentence: "9. I ___ (to study) English at school.", correct: "study" },
    { sentence: "10. She ___ (to write) a letter now.", correct: "is writing" },
    { sentence: "11. Robert ___ (to go) to the gym every day.", correct: "goes" },
    { sentence: "12. Anna ___ (to play) the piano right now.", correct: "is playing" },
    { sentence: "13. They ___ (to travel) to Spain this week.", correct: "are traveling" },
    { sentence: "14. We ___ (to meet) our friends on Mondays.", correct: "meet" },
    { sentence: "15. I ___ (to watch) TV in the evening.", correct: "watch" },
    { sentence: "16. He ___ (to never eat) vegetables.", correct: "never eats" },
    { sentence: "17. She ___ (to drive) her car to work now.", correct: "is driving" },
    { sentence: "18. They ___ (to usually go) to the park.", correct: "usually go" },
    { sentence: "19. I ___ (to play) soccer sometimes.", correct: "play" },
    { sentence: "20. Robert ___ (to study) for his exam today.", correct: "is studying" },
    { sentence: "21. Anna ___ (to help) her brother with homework right now.", correct: "is helping" },
    { sentence: "22. We ___ (to always enjoy) our weekends.", correct: "always enjoy" },
    { sentence: "23. He ___ (to never watch) horror movies.", correct: "never watches" },
    { sentence: "24. I ___ (to read) a great book at the moment.", correct: "am reading" },
    { sentence: "25. They ___ (to clean) the house this week.", correct: "are cleaning" },
    { sentence: "26. She ___ (to usually have) breakfast at 8 AM.", correct: "usually has" },
    { sentence: "27. Robert ___ (to go) to work by car every day.", correct: "goes" },
    { sentence: "28. We ___ (to play) games together on weekends.", correct: "play" },
    { sentence: "29. He ___ (to take) a shower now.", correct: "is taking" },
    { sentence: "30. Anna ___ (to call) her friend sometimes.", correct: "calls" },
    { sentence: "31. I ___ (to finish) my project today.", correct: "am finishing" },
    { sentence: "32. They ___ (to ride) their bikes at the moment.", correct: "are riding" }
];

const sentencesContainer = document.getElementById("sentences");
const finishButton = document.getElementById("finishButton");
const resultContainer = document.getElementById("result");

sentences.forEach((item, index) => {
    const sentenceDiv = document.createElement("div");
    sentenceDiv.classList.add("sentence");
    sentenceDiv.innerHTML = item.sentence.replace("___", `<input type="text" id="input${index}" placeholder="ievietot vārdu" />`);
    sentencesContainer.appendChild(sentenceDiv);

    const inputField = document.getElementById(`input${index}`);
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkAnswer(inputField, item.correct);
        }
    });
});

// Check answer
function checkAnswer(inputField, correctAnswer) {
    const userInput = inputField.value.trim();
    const isCorrect = userInput.toLowerCase() === correctAnswer.toLowerCase();
    
    inputField.classList.remove("correct", "incorrect"); // Noņem iepriekšējos rezultātus
    if (isCorrect) {
        inputField.classList.add("correct");
    } else {
        inputField.classList.add("incorrect");
    }
}

// Results
finishButton.addEventListener("click", () => {
    let correctCount = 0;

    sentences.forEach((item, index) => {
        const inputField = document.getElementById(`input${index}`);
        if (inputField.classList.contains("correct")) {
            correctCount++;
        }
    });

    resultContainer.innerHTML = `Pareizo atbilžu skaits: ${correctCount} / ${sentences.length}`;
});

// passwords, hide and show content
const spikerisPasswordInput = document.getElementById("spikerisPassword");
        const showSpikerisButton = document.getElementById("showSpikerisButton");
        const hideSpikerisButton = document.getElementById("hideSpikerisButton");
        const notesContainer = document.getElementById("notes");

        const atbildesPasswordInput = document.getElementById("atbildesPassword");
        const showAtbildesButton = document.getElementById("showAtbildesButton");
        const hideAtbildesButton = document.getElementById("hideAtbildesButton");
        const answersContainer = document.getElementById("answers");

        showSpikerisButton.addEventListener("click", () => {
            const password = spikerisPasswordInput.value;
            if (password === "spikeris") {
                notesContainer.style.display = "block";
                showSpikerisButton.style.display = "none";
                hideSpikerisButton.style.display = "block";
            } else {
                alert("Nepareiza parole!");
            }
        });

        hideSpikerisButton.addEventListener("click", () => {
            notesContainer.style.display = "none";
            showSpikerisButton.style.display = "block";
            hideSpikerisButton.style.display = "none";
        });

        showAtbildesButton.addEventListener("click", () => {
            const password = atbildesPasswordInput.value;
            if (password === "atbildes") {
                answersContainer.style.display = "block";
                showAtbildesButton.style.display = "none";
                hideAtbildesButton.style.display = "block";
            } else {
                alert("Nepareiza parole!");
            }
        });

        hideAtbildesButton.addEventListener("click", () => {
            answersContainer.style.display = "none";
            showAtbildesButton.style.display = "block";
            hideAtbildesButton.style.display = "none";
        });