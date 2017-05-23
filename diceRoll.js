console.log("Starting....." + Date());
console.log("The dice will be randomized 5 times!")
var repeat = 5;
console.log("repeat: " + repeat);

getDiceOutcome(repeat);


function getDiceOutcome(repeatValue) {
    console.log("repeatValue: " + repeatValue);

    var diceOutcome;
    var outcome1Count = 0;
    var outcome2Count = 0;
    var outcome3Count = 0;
    var outcome4Count = 0;
    var outcome5Count = 0;
    var outcome6Count = 0;

    while (repeatValue >= 1) {
        diceOutcome = Math.random();
        if (diceOutcome == 0) diceOutcome = diceOutcome + 0.1;
        diceOutcome = Math.ceil(diceOutcome * 6);

        if (diceOutcome == 1) outcome1Count = outcome1Count + 1;
        if (diceOutcome == 2) outcome2Count = outcome2Count + 1;
        if (diceOutcome == 3) outcome3Count = outcome3Count + 1;
        if (diceOutcome == 4) outcome4Count = outcome4Count + 1;
        if (diceOutcome == 5) outcome5Count = outcome5Count + 1;
        if (diceOutcome == 6) outcome6Count = outcome6Count + 1;


        repeatValue = repeatValue - 1
    }

    console.log("Outcome 1: " + outcome1Count + " " + 100 * (outcome1Count / repeat) + "%");
    console.log("Outcome 2: " + outcome2Count + " " + 100 * (outcome2Count / repeat) + "%");
    console.log("Outcome 3: " + outcome3Count + " " + 100 * (outcome3Count / repeat) + "%");
    console.log("Outcome 4: " + outcome4Count + " " + 100 * (outcome4Count / repeat) + "%");
    console.log("Outcome 5: " + outcome5Count + " " + 100 * (outcome5Count / repeat) + "%");
    console.log("Outcome 6: " + outcome6Count + " " + 100 * (outcome6Count / repeat) + "%");

}
