// TODO: Given a number from 0 to 999,999,999,999, spell out that number in English.

// ! A GOOD QUESTION

let one = [ "", "one", "two", "three", "four","five", "six", "seven", "eight","nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen","nineteen" ];
let ten = [ "", "", "twenty", "thirty", "forty","fifty", "sixty", "seventy", "eighty","ninety"];

const numToWords = (n, s) => {
    let str = "";
    if (n > 19) {
        str += ten[parseInt(n / 10)] + "-" + one[n % 10];
    }
    else {
        str += one[n];
    }
    if (n != 0) {
        str += s;
    }
    return str;
}

const sayNumberInEnglish = (n) => {
    let out = "";

    out += numToWords(parseInt(n / 10000000), " billion ");

    out += numToWords(parseInt((n / 1000000) % 100), " million ");

    out += numToWords(parseInt((n / 100000) % 10), " hundred ");

    out += numToWords(parseInt((n / 1000) % 100), " thousand ");

    out += numToWords(parseInt((n / 100) % 10), " hundred ");

    out += numToWords(parseInt(n % 100), "");

    return out.trim();
}

console.log(`5635 in english is: ${sayNumberInEnglish(567371)}`)
