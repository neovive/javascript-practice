// Rock, Paper, Scissors game using Closures
var rps = function () {

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
        }(),

        play: function(userChoice) {

            if (userChoice === this.computerChoice) {
                return userChoice + "=>" + this.computerChoice + " = " + "Tie!";
            }

            if (userChoice === "rock") {
                if (this.computerChoice === "scissors") {
                    return userChoice + "=>" + this.computerChoice + " = " + "Rock Wins!";
                }
                else {
                     return userChoice + "=>" + this.computerChoice + " = " + "Paper Wins!";
                }
            }

            if (userChoice === "scissors") {
                if (this.computerChoice === "rock") {
                     return userChoice + "=>" + this.computerChoice + " = " + "Rock Wins!";
                }
                else {
                     return userChoice + "=>" + this.computerChoice + " = " + "Scissors Wins!";
                }
            }

            if (userChoice === "paper") {
                if (this.computerChoice === "scissors") {
                     return userChoice + "=>" + this.computerChoice + " = " + "Scissors Wins!";
                }
                else {
                     return userChoice + "=>" + this.computerChoice + " = " + "Paper Wins!";
                }
            }
        }

    };

    //console.log(compare);
    //compare(userChoice, computerChoice);
};


//var choice = prompt("Do you choose rock, paper or scissors?");
var game = rps();
console.log(game.play("rock"));