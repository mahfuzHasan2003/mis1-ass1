const workingDays = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
const weekends = ["friday", "saturday"];


const getDayType = (day = "") => {
   day = day.toLowerCase();
   return `${workingDays.includes(day) ? "Working Day"
      : weekends.includes(day) ? "Weekend"
         : "Invalid Day"}`
};