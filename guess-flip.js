import { flipACoin } from "./modules/coin.mjs"

const myArgs = process.argv.slice(2)
const usage = "Usage: node guess-flip --call=[heads|tails]"
let call = "", err = ""
if (myArgs[0] == null) {
    err = "no input."
    console.error(err)
    console.log(usage)
    process.exit(1)
}
else call = myArgs[0].split("--call=")[1]

if (call == null) {
    err = "wrong input."
    console.error(err)
    console.log(usage)
    process.exit(1)
}
else console.log(flipACoin(call))