const { ethers } = require("ethers");

async function main () {
//source is cold wallet
src_wallet_address = "xxx" //need to change to your src cold wallet address
dst_wallet_address = "xxx" //need to change to your dst cold wallet address
//check initial balance
const myprovider = ethers.getDefaultProvider("mainnet")
console.log("Before transaction:")
src_balance = await myprovider.getBalance(src_wallet_address)
src_bal_eth = ethers.utils.formatUnits(src_balance)
console.log("src balance:", src_bal_eth)

dst_balance = await myprovider.getBalance(dst_wallet_address)
dst_bal_eth = ethers.utils.formatUnits(dst_balance)
console.log("dst balance:", dst_bal_eth)

// publish transaction online
//console.log(await myprovider.getGasPrice())
//const signed_tx = "xxx" ////need to change to your signed transaction generated offline
console.log("Wait for transaction confirmation...")
resp = await myprovider.sendTransaction(signed_tx)
await myprovider.waitForTransaction(resp.hash)

//wallet = mywallet.connect(myprovider)
//balance = await wallet.getBalance()
//const bal_eth = ethers.utils.formatUnits(balance)

//check results
console.log("After transaction:")
src_balance = await myprovider.getBalance(src_wallet_address)
src_bal_eth = ethers.utils.formatUnits(src_balance)
console.log("src balance:", src_bal_eth)

dst_balance = await myprovider.getBalance(dst_wallet_address)
dst_bal_eth = ethers.utils.formatUnits(dst_balance)
console.log("dst balance:", dst_bal_eth)

}

main()
    .then(() => process.exit(0))
    .catch(err => {console.error(err);process.exit(1);})

