function palindrome(word) {

    word = word.toLowerCase();

    let half = word.length;

    for (let i = 0; i < Math.floor(half / 2); i++) {

        if (word[i] !== word[half - 1 - i]) {

            return false;
        }
    }
    return true;
}

function checkPalindrome() {

    let userWord = document.getElementById("input").value;

    let resultElement = document.getElementById("result");

    if (userWord === "") {

        resultElement.textContent = "Dovresti inserire qualcosa magari....";
        
    } else if (palindrome(userWord)) {

        resultElement.textContent = "Complimenti, questa parola è magica.";

    } else {

        resultElement.textContent = "Mi spiace, nessuna magia in questa parola.";
    }
}