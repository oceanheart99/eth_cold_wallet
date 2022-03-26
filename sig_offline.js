const { ethers } = require("ethers");
const { constants, openSync, writeSync, closeSync, existsSync, readFileSync } = require('fs');

async function main () {

    const mne_file = './mne.txt';
    try {
        b_exist = existsSync(mne_file);
    } catch (err) {
        console.error('file check exist error!');
    }

    if (!b_exist){
        console.log('There is no wallet, just create it.');
        try {
            fd = openSync(mne_file, constants.R_OK | constants.W_OK | constants.O_CREAT);
        } catch (err) {
            console.error('file open error!');
        }
        // used in first time, and then save mne
        mywallet = ethers.Wallet.createRandom();
        //console.log(mywallet.mnemonic)
        writeSync(fd, mywallet.mnemonic.phrase);
        closeSync(fd);
    }

    console.log('Open wallet:')
    var mne = '';
    try {
        const data = readFileSync(mne_file);
        mne = data.toString();
    } catch (err) {
        console.error('file open error!');
    }
  
    cold_wallet = ethers.Wallet.fromMnemonic(mne);
    console.log(cold_wallet.address);

    // generate transaction and sign offline
    tx = {
        to: "0x2A2A64ff0a51257fE4115a3cC1bf94687F13223d", // change to your dst wallet address
        value: ethers.utils.parseEther("0.005"),
        gasLimit: ethers.BigNumber.from("50000"),
        gasPrice: ethers.BigNumber.from("30000000000")
    }

    signed_tx = await cold_wallet.signTransaction(tx)
    console.log(signed_tx);
}

main()
    .then(() => process.exit(0))
    .catch(err => {console.error(err);process.exit(1);})

