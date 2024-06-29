const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATE = 0.3;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;

    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * TAX_RATE;
    let nhifDeduction = grossSalary * NHIF_RATE;
    let nssfDeduction = grossSalary * NSSF_RATE;
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return {
        'Gross Salary': grossSalary,
        'Tax': tax,
        'NHIF Deduction': nhifDeduction,
        'NSSF Deduction': nssfDeduction,
        'Net Salary': netSalary
    };
}

rl.question('Enter Basic Salary: ', (basicSalaryInput) => {
    const basicSalary = parseFloat(basicSalaryInput);

    rl.question('Enter Benefits: ', (benefitsInput) => {
        const benefits = parseFloat(benefitsInput);

        const salaryDetails = calculateNetSalary(basicSalary, benefits);

        console.log("\nSalary Details:");
        for (let key in salaryDetails) {
            console.log(`${key}: ${salaryDetails[key]}`);
        }

        rl.close();
    });
});
