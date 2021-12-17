// TODO: Ask the Bob

function hey(message) {
  let x;

  if (message.match(/[a-z]+\?$/g)) {
    x = 0;
  } else if (message.match(/[A-Z]+$/g)) {
    x = 1;
  } else if (message.match(/[A-Z]+\?$/g)) {
    x = 2;
  } else if (message.match(/^bob$/gi)) {
    x = 3;
  }

  let res = "";

  switch (x) {
    case 0:
      res = "Sure";
      break;
    case 1:
      res = "Whoa, chill out!";
      break;
    case 2:
      res = "Calm down, I know what I'm doing!";
      break;
    case 3:
      res = "Fine. Be that way!";
      break;
    default:
      res = "Whatever.";
      break;
  }
  return res;
}

// const str = "YELL AT HIM"
// console.log(hey(str))
