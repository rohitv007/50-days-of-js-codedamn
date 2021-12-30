// TODO: Human readable duration format

// ! REALLY GOOD QUESTION

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  if (seconds < 60) return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;

  const siy = 31536000,
    sid = 86400,
    sih = 3600,
    sim = 60;
  // number of seconds in a year, a day, an hour and a minute resp.

  let a = parseInt(seconds / siy);
  let rem = seconds % siy;
  let years = a ? `${a} ${a === 1 ? "year" : "years"}` : "";

  let b = parseInt(rem / sid);
  let rem1 = rem % sid;
  let days = b ? `${b} ${b === 1 ? "day" : "days"}` : "";

  let c = parseInt(rem1 / sih);
  let rem2 = rem1 % sih;
  let hours = c ? `${c} ${c === 1 ? "hour" : "hours"}` : "";

  let d = parseInt(rem2 / sim);
  let rem3 = rem2 % sim;
  let minutes = d ? `${d} ${d === 1 ? "minute" : "minutes"}` : "";

  let sec = rem3 ? `${rem3} ${rem3 === 1 ? "second" : "seconds"}` : "";

  // pushing calc. values to the array
  const arr = [years, days, hours, minutes, sec].filter((item) => item !== "");
  const len = arr.length;
  
  let res =
    len === 1
      ? `${arr[0]}`
      : `${arr.slice(0, len - 1).join(", ")} and ${arr.slice(len - 1)}`;

  return res;
}

console.log(formatDuration(3662));
