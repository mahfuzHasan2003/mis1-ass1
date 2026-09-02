const validateUsername = (pass = "") => {
   return pass.length < 4 ? "Too Short"
      : pass.includes(" ") ? "No Space Allowed"
         : pass.toLowerCase().includes("admin") ? "Reserved Word"
            : "Available";
}




// Write a function validateUsername that takes a username and checks it against these rules, in this order:

// Shorter than 4 characters → return "Too Short"
// Contains a space → return "No Space Allowed"
// Contains the word admin anywhere, in any letter case → return "Reserved Word"
// Otherwise → return "Available"