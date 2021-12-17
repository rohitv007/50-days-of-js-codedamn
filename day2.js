// TODO: Write a program to reverse a string

const str = "JavaScript is awesome";

function reverseAString(str) {
    // write your solution here
    return str.split("").reverse().join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`);
