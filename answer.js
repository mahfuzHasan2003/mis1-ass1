// Question 1: Value Detective 
const describeValue = (val) => `${typeof (val)} | ${!!val ? "truthy" : "falsy"}`;

// Question 2: Bangladesh Weekend Machine
const workingDays = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
const weekends = ["friday", "saturday"];

const getDayType = (day = "") => {
   day = day.toLowerCase();
   return `${workingDays.includes(day) ? "Working Day"
      : weekends.includes(day) ? "Weekend"
         : "Invalid Day"}`
};

// Question 3: Username Gatekeeper
const validateUsername = (pass = "") => {
   return pass.length < 4 ? "Too Short"
      : pass.includes(" ") ? "No Space Allowed"
         : pass.toLowerCase().includes("admin") ? "Reserved Word"
            : "Available";
}

// Question 4: Dhaka CNG Fare Meter
const getCngFare = (distance = 0, isNight = false, waitingMinutes = 0) => {
   const distanceCost = distance <= 2 ? 50 : 50 + (distance - 2) * 15;
   const waitingCharge = waitingMinutes * 2;
   const nightCharge = isNight ? (distanceCost + waitingCharge) * 0.2 : 0;
   return distanceCost + waitingCharge + nightCharge;
}

// Question 5: Run Chase Commentator
const getChaseVerdict = (target = 0, scored = 0, ballsLeft = 0) => {
   const runsNeeded = target - scored;
   if (runsNeeded <= 0) return "Won";
   else {
      if (ballsLeft <= 0) return "Lost";
      else {
         const requiredRate = (runsNeeded / ballsLeft) * 6;
         const verdict = requiredRate <= 6 ? "Comfortable"
            : requiredRate > 6 && requiredRate <= 12 ? "Tough"
               : "Almost Impossible";
         return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
      }
   }
}