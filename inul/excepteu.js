// Define the desired value (setpoint)
const u = 10;

// Current state value
let x = 7;

// Compute the difference (error)
let dx = u - x;

console.log("Difference (error):", dx);  // Output: Difference (error): 3

// Implementing a simple proportional controller
let k = 0.5;  // Proportional gain
let controlAction = k * dx;  // Control action to reduce the error

console.log("Control Action:", controlAction);  // Output: Control Action: 1.5

// Update the current state based on control action
x += controlAction;

console.log("Updated State:", x);  // Output: Updated State: 8.5
