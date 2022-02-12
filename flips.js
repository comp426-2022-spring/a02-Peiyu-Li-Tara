import { flipManyCoins } from "./modules/coin.mjs"

const myArgs = process.argv.slice(2)
let number = 0
try {
    number = myArgs[0].split("--number=")[1]
} catch (err) {
    number = 1
}

flipManyCoins(number)