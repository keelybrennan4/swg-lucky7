//function for each dice roll 
function rollDice(){
    return Math.floor(Math.random() * 6 + 1);
};
        
function playGame(){
    var roundCounter = 0;
    
    var maxMoney = 0;
    var roundMaxMoney = 0;
    var winCount = 0;
    // get starting bet from user and check if starting bet is greater than 0
    var bet =  document.getElementById("bet").value;
    //set initial bet equal to user's money
    var money = bet;
    console.log("Your initial bet is $" + bet);

    if (money <= 0) {
        alert("You need to bet more than $0! Enter a new bet.");
        console.log(money);    
    } else {
        //if money remains, continue to roll dice and increment round counter. Repeat until money is gone
        while (money > 0) {
            diceOne = rollDice();
            diceTwo = rollDice();
            diceSum = diceOne + diceTwo;
            roundCounter++;
            console.log("Dice Sum: " + diceSum);
        
            //if dice sum is not 7, user loses round and money is decremented by $1
            if(diceSum != 7){
                money--;
                console.log("Not a winner this round, " + roundCounter + "|  money: $" + money);

            //if dice sum is 7, user wins round and money is incremented by $4
            } else {
                money += 4;
                //winCount++
                //winCount[winCount.length] = money;
                //console.log("win count" + winCount);
                //console.log("You won this round, " + roundCounter +  "|  money: $" + money);
            }

                //also check if round qualifies for max winning
                if (money > maxMoney) {
                   //roundCounter = roundMaxMoney;
                   console.log(roundMaxMoney);
                }

                 //   maxMoney += (money - maxMoney);
                 //   roundMaxMoney = roundCounter;
                //}
                //    console.log("Max Money: " + roundMaxMoney + " " + roundCounter);
                //    console.log("YOU WON!")åß
        
        }
    }
    //display results on page
    document.getElementById("heading").innerHTML = ("Results");
    document.getElementById("results").style.display = "block";
	document.getElementById("startingBet").innerHTML = ("$" + bet + ".00");
	document.getElementById("rollsBeforeBroke").innerHTML = roundCounter;
    document.getElementById("maxMoney").innerHTML = ("$" + roundMaxMoney + ".00");
    document.getElementById("highRollCount").innerHTML = "?"
    //document.getElementById("highRollCount").innerHTML = winCount.indexOf(roundMaxMoney);
	//document.getElementById("submit").innerHTML = "Play Again?";
    //document.forms["inputBet"]["bet"];
    return false;
}

