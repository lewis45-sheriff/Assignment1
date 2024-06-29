# Net Salary Calculator

This Node.js program calculates the net salary of an individual based on their basic salary and benefits, taking into account tax, NHIF deductions, and NSSF deductions.

## Execution

To run this program, follow these steps:

1. **Install Node.js:**
   - Ensure you have Node.js installed on your machine. If not, download and install it from [Node.js website](https://nodejs.org/).

2. **Clone the Repository:**
   - Clone this repository to your local machine using Git:

     ```bash
     git clone https://github.com/your-repo-url.git
     ```

3. **Navigate to the Directory:**
   - Navigate into the directory where you have cloned the repository:

     ```bash
     cd net-salary-calculator
     ```

4. **Install Dependencies:**
   - If there are any dependencies listed in `package.json`, install them using npm:

     ```bash
     npm install
     ```

5. **Run the Program:**
   - Execute the program using Node.js. This will prompt you to enter the basic salary and benefits:

     ```bash
     node net_salary_calculator.js
     ```

6. **Follow Prompts:**
   - Enter the basic salary and benefits as prompted. The program will then calculate and display the gross salary, tax, NHIF deduction, NSSF deduction, and net salary.

7. **View Results:**
   - After entering the inputs, the program will print out the salary details, including the calculated components.

## Explanation

- **JavaScript File (`net_salary_calculator.js`):**
  - This file contains the JavaScript code that calculates net salary based on user input using `readline` for interactive input handling.
  - The `calculateNetSalary` function computes the gross salary, tax, NHIF deduction, NSSF deduction, and net salary based on fixed rates.
  - `readline` module is used to prompt the user for inputs (basic salary and benefits) and display the results.

- **Components Calculated:**
  - **Gross Salary:** Sum of basic salary and benefits.
  - **Tax:** 30% of the gross salary.
  - **NHIF Deduction:** 2.5% of the gross salary.
  - **NSSF Deduction:** 6% of the gross salary.
  - **Net Salary:** Gross salary minus tax, NHIF deduction, and NSSF deduction.

- **Output:**
  - The program prints out the calculated components in the console, providing a breakdown of how the net salary is derived from the inputs provided.

---

Feel free to customize and extend this program as needed for your specific requirements or use case.
