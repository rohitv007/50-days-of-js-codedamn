// TODO: Write a function which can convert the time input given in 12 hours format to 24 hours format

function convertTo24HrsFormat(time) {
    let hrs = parseInt(time.split(':')[0].trim())
    let part2 = time.split(':')[1]
    let len = part2.length
    let halflen = Math.floor(len/2)
    let mins = part2.substr(0,halflen)
    let modifier = part2.substr(halflen)

    console.log(hrs, mins, modifier)

    if(modifier === "AM") {
        return (hrs === 12) ? `00:${mins}` : (hrs < 10) ? `0${hrs}:${mins}` : `${hrs}:${mins}` 
    } 
    else {
        if(mins.length === 1) {
            return (hrs !== 12) ? `${hrs+12}:0${mins}` : `${hrs}:0${mins}`
        } else {
            return (hrs !== 12) ? `${hrs+12}:${mins}` : `${hrs}:${mins}`
        }
    }
}

console.log(`Converted time: ${convertTo24HrsFormat("11:8PM")}`)
