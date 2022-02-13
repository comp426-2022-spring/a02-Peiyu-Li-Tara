import { flipACoin } from "./modules/coin.mjs"

const myArgs = process.argv.slice(2)
const usage = "Usage: node guess-flip --call=[heads|tails]"
let call = "", err = ""
if (myArgs[0] == null) {
    err = "Error: no input."
    console.error(err)
    console.log(usage)
}
else {
    call = myArgs[0].split("--call=")[1]
    if (call == null || (call != "heads" && call != "tails")) {
        console.log(usage)
    }
    else console.log(flipACoin(call))
}