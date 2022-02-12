// Import the coinFlip function from your coin.mjs file
import { coinFlip,coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"

// Call the coinFlip function and put the return into STDOUT

console.log(coinFlip())
console.log(coinFlips(10))
console.log(countFlips(["heads", "heads", "tails"]))
console.log(flipACoin("heads"))