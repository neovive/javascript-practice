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

            var output = "User chose " + userChoice + " and Computer chose " + this.computerChoice + ". \n";

            if (userChoice === this.computerChoice) {
                output += "Tie!";
                return output;
            }

            if (userChoice === "rock") {
                if (this.computerChoice === "scissors") {
                    output += "Rock Wins!";
                }
                else {
                     output += "Paper Wins!";
                }
            }

            if (userChoice === "scissors") {
                if (this.computerChoice === "rock") {
                     output += "Rock Wins!";
                }
                else {
                     output += "Scissors Wins!";
                }
            }

            if (userChoice === "paper") {
                if (this.computerChoice === "scissors") {
                     output += "Scissors Wins!";
                }
                else {
                     output += "Paper Wins!";
                }
            }

            return output;
        }

    };

};


//var choice = prompt("Do you choose rock, paper or scissors?");
var game = rps();
console.log(game.play("rock"));