const { ethers } = require("ethers");

async function main () {
// used in first time, and then save mne
//mywallet = ethers.Wallet.createRandom();
//console.log(mywallet.mnemonic);
mne = "xxxx"
cold_wallet = ethers.Wallet.fromMnemonic(mne)

// generate transaction and sign offline
tx = {
to: "xxx", // change to your dst wallet address
value: ethers.utils.parseEther("0.005"),
gasLimit: ethers.BigNumber.from("50000"),
gasPrice: ethers.BigNumber.from("30000000000")
}

signed_tx = await cold_wallet.signTransaction(tx)
console.log(signed_tx)
console.log(cold_wallet.address)
}

main()
    .then(() => process.exit(0))
    .catch(err => {console.error(err);process.exit(1);})

