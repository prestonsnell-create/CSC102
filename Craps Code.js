//makes the code work
function playCraps(){
//sets the variables
let roll1 = rollDice();
let roll2 = rollDice();
//adds the variables
let sum = roll1 + roll2
//We can see in the console
document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;
document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;
document.getElementById("divSum").textContent = "Your Total: " + sum;

let result = ""
//else if statements
if (sum == 7 || sum == 11){
    result = "KJFFGLASRBGKIASREBVLUAWER"
}
else if(roll1 % 2 == 0 && roll1 == roll2){
    result = "Whoopie!"
}
else{
    result = "Aw Dang It"
}
document.getElementById("divResult").textContent = result;
//runs game on math side
}
function rollDice(){
let die = Math.random() * 6;
return Math.ceil(die);
}