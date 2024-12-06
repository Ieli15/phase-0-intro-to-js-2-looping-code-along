//A. WRITECARDS
// Function to create thank-you cards
function writeCards(names = ['Elias', 'Alice', 'Joel', 'Julius', 'Salome'], event) {
  // Step 1: Create an empty array to hold the messages
  const messages = [];

  // Step 2: Iterate through the names array
  for (let i = 0; i < names.length; i++) {
    // Build the thank-you message using string interpolation
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    
    // Add the message to the array
    messages.push(message);
  }

  // Step 3: Return the array of messages
  return messages;
}

// B: COUNTDOWN

function countDown(number) {
    // Step 1: Ensure the number is positive
    if (number < 0) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    // Step 2: Use a while loop to count down
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number at the end of each iteration
    }
  }
  
  