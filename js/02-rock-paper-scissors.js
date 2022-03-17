/* The Rock, Paper, Scissors Game
Rock, paper, scissors is a classic 2 player game.
Each player chooses rock, paper or scissors. 

The possible outcomes include:

•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.

Our code will break the game into 3 phases:

1.	User makes a choice. How will we collect the user’s choice?

2.	Computer makes a choice. How will we collect the computer’s choice?

3.	A conditional that determines who wins.
You will be responsible for figuring out some of the logic. 
These next steps will attempt to guide you down the right path: 

1.	Begin by prompting the user for their choice.
2.	Create the computer’s choice. 
    This will be generated similarly to the coin flip that you did in the last assignment. 
    Remember though, rather than 2 options, there will be 3 here.

3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.

4.	Create a conditional statement that checks the user’s choice in relation to the computer’s choice. 
Once a winner is defined, display a message within an alert box indicating who the winner is.

5.	What if the result ends in a tie? Figure out how to handle that as well.
6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
 */



var userChoice = prompt(" What is you choice? select between: rock, paper or scissors ");
 
var computerChoice = Math.random();

 if (computerChoice < 0.34) {
   computerChoice = "rock";

     } else if(computerChoice <= 0.67) {
       computerChoice = "paper";

 } else {
   computerChoice = "scissors";
 }

 console.log("Computer\'s choice: " + computerChoice);
 
var compare = function(choice1,choice2) {
  
   if (choice1 === choice2) {
      
       return "The result is a tie!" + " " + "Lets play again." ;
   }
  
   else if (choice1 === "rock") {
      
       if (choice2 === "scissors") {
           return "rock wins" + "<br>" + "The computer lose, you win";
       }
       else {
           return "paper wins" + "<br>" + "The computer wins, you lose.";
       }
   }
  
   else if (choice1 === "paper") {
      
       if (choice2 === "rock") {
           return "paper wins" + "<br>" + "The computer lose, you win";
       }
       else {
           return "scissors wins" + "<br>" + "The computer wins, you lose.";;
       }
          
   }
  
   else if (choice1 === "scissors") {
      
       if (choice2 === "rock") {
           return "rock wins" + "<br>" + "The computer wins, you lose.";;
       }
       else {
           return "scissors win" + "<br>" + "The computer lose, you win!";
       }
   }
  
  
   } 
 
  document.write("Computer\'s choice: " + computerChoice + "<br>");
  document.write(compare(userChoice,computerChoice));