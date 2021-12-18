// TODO: Rna Transcription

const dnaToRna = (dnaStrand) => {
  if (dnaStrand === "G") return "C";
  else if (dnaStrand === "C") return "G";
  else if (dnaStrand === "T") return "A";
  else if (dnaStrand === "A") return "U";
};

const transcription = (dna) => {
  // * METHOD-1
  // let dnaArr = dna.split('')
  // let rnaArr = dnaArr.map(dnaStrand => dnaToRna(dnaStrand))
  // console.log(rnaArr)
  // return rnaArr.join('')

  // * METHOD-2 - oneliner
  return dna.split("").map((dnaStrand) => dnaToRna(dnaStrand)).join("");
};

console.log(transcription("GATC"));
