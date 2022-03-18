const { ethers } = require("ethers");

async function main () {
//source is cold wallet
src_wallet_address = "0x0765919FCB7beAEc6922c2086180751D0f0D55A3"
dst_wallet_address = "0x2A2A64ff0a51257fE4115a3cC1bf94687F13223d"
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
//const signed_tx = "0xf86b808506fc23ac0082c350942a2a64ff0a51257fe4115a3cc1bf94687f13223d871550f7dca70000801ca01d69f39bdbeb62ad793688166a666cb18f005eb62e44b00938b007b8c289aa44a04a1fc0d7236e3ebf1dd241f782a6aca433e3e48643f7602dd7bec81caa2d6a43"
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

