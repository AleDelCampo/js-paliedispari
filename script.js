function evenOrOdd() {

    const userChoice = prompt("Pari o Dispari:");

    if (userChoice !== "Pari" && userChoice !== "Dispari") {

        alert("Scelta non valida. Scegli tra pari o dispari.");

        return;
    };

    const userNumber = parseInt(prompt("Ora Tira!!(un numero da 1 a 5)"));

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {

        alert("Numero non valido. Inserisci un numero da 1 a 5.");

        return;
    };

    function randomNumber() {

        return Math.floor(Math.random() * 5) + 1;
    
    }
    
    const computerNumber = randomNumber();

    function somma(userNumber, computerNumber) {

        return userNumber + computerNumber;

    }

    const sum = somma(userNumber, computerNumber);

    if (sum === userChoice) {

        document.getElementById("result").innerHTML = ("La vittoria va all'User.!");

    } else {

        document.getElementById("result").innerHTML = ("La tecnologia Vince.");

    };
};

evenOrOdd();
