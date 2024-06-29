const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGrade() {
    rl.question("Enter student marks (0-100): ", function(answer) {
        let marks = parseFloat(answer);

        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 50) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            console.log(`The grade for marks ${marks} is: ${grade}`);
            rl.close();
        } else {
            console.log("Marks should be a numeric value between 0 and 100. Please try again.");
            studentGrade(); // Ask again if input is invalid
        }
    });
}

// Call the function to prompt the user for input and display the grade
studentGrade();
