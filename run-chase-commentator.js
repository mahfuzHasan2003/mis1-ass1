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




// Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

// Steps:
// runsNeeded = target - scored
// If runsNeeded is 0 or less, the match is already won → return "Won"
// Otherwise, if ballsLeft is 0 or less, there is no ball left to score → return "Lost"

// Otherwise, work out the required run rate:
// requiredRate = (runsNeeded / ballsLeft) * 6
// Pick the verdict from the rate:

// Required rate	Verdict
// 6 or less	"Comfortable"
// more than 6, up to 12	"Tough"
// more than 12	"Almost Impossible"
// Return this exact sentence:

// Need <runsNeeded> runs in <ballsLeft> balls | <verdict>
// Always write runs and balls, even when the number is 1.