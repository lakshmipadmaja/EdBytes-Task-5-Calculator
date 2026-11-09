# EdBytes Milestone 5 – Four-Operation Calculator

A responsive calculator built using HTML, CSS and vanilla JavaScript.

## How to run
1. Extract the ZIP file.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser (or use the VS Code Live Server extension).
4. Enter two numbers and select an operation.

## Features
- Addition, subtraction, multiplication and division
- Separate JavaScript functions for all four operations
- Validation for blank and invalid input
- Division-by-zero error handling
- Clear button and responsive layout
- No `eval()` used

## Five test examples

| Test | First number | Second number | Operation | Expected result |
|---|---:|---:|---|---|
| 1 | 12 | 8 | Add | 20 |
| 2 | 15 | 6 | Subtract | 9 |
| 3 | 7 | 5 | Multiply | 35 |
| 4 | 20 | 4 | Divide | 5 |
| 5 | 10 | 0 | Divide | Error: Cannot divide by zero |

Also try clicking an operation while one or both inputs are empty. The app should display a helpful validation message.

## What I changed
I implemented four separate arithmetic functions and connected the operation buttons using a click event listener. I added input validation so empty or invalid values are not calculated, and I handled division by zero with a clear error message.

## What I learned
I learned how JavaScript functions, event listeners, conditional statements and input validation work together to make a web page interactive.

Before submitting, run the app yourself in a browser and confirm the five test cases. Add your own observations if the results differ.
