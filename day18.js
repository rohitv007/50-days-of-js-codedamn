// TODO: Calculate Grains on a given square on a chessboard

const totalGrains = () => {
    return (Math.pow(2,64) - 1)
}

const grainsOn = (input) => {
	return Math.pow(2,input-1)
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains(5)}`)
