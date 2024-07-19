const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
    
    rl.close(); 
}

// Prompt user for input
rl.question("Enter the speed of the car: ", function(speed) {
    speed = parseInt(speed); 
    calculateDemeritPoints(speed);
});
