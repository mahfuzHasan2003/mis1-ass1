const getCngFare = (distance = 0, isNight = false, waitingMinutes = 0) => {
   const distanceCost = distance <= 2 ? 50 : 50 + (distance - 2) * 15;
   const waitingCharge = waitingMinutes * 2;
   const nightCharge = isNight ? (distanceCost + waitingCharge) * 0.2 : 0;
   return distanceCost + waitingCharge + nightCharge;
}





// Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.

// Fare rules:
// The minimum fare is 50 taka, and it covers the first 2 km.
// Every km after the first 2 km costs 15 taka.
// Waiting charge: 2 taka for every waiting minute.
// At night, the driver adds 20% on the whole fare — that means on the distance charge and the waiting charge together.
// isNight should default to false and waitingMinutes should default to 0, so getCngFare(5) must work on its own.