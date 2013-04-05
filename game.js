// Rock, Paper, Scissors game using Closures
var game = function (userChoice) {

    return {

        // generate the computer choice
        computerChoice: function() {
            var choice = Math.random();

            if (choice < 0.34) {
                return "rock";
            } else if(choice <= 0.67) {
                return "paper";
            } else {
                return "scissors";
            }
        },

        play: function() {

            console.log("userChoice: " + userChoice);

            var computer = this.computerChoice();

            if (userChoice === computer) {
                return userChoice + "=>" + computer + " = " + "Tie!";
            }

            if (userChoice === "rock") {
                if (computer === "scissors") {
                    return userChoice + "=>" + computer + " = " + "Rock Wins!";
                }
                else {
                     return userChoice + "=>" + computer + " = " + "Paper Wins!";
                }
            }

            if (userChoice === "scissors") {
                if (computer === "rock") {
                     return userChoice + "=>" + computer + " = " + "Rock Wins!";
                }
                else {
                     return userChoice + "=>" + computer + " = " + "Scissors Wins!";
                }
            }

            if (userChoice === "paper") {
                if (computer === "scissors") {
                     return userChoice + "=>" + computer + " = " + "Scissors Wins!";
                }
                else {
                     return userChoice + "=>" + computer + " = " + "Paper Wins!";
                }
            }
        }

    };

    //console.log(compare);
    //compare(userChoice, computerChoice);
};



//var choice = prompt("Do you choose rock, paper or scissors?");

var result = game("rock");
//console.log("Result: " + result);
console.log(result.play());