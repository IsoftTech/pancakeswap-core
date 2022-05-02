require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('@nomiclabs/hardhat-etherscan');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.16",
  networks: {
    dev: {
        url: "http://localhost:7545",
        gasPrice: 20,
        saveDeployments: true
    },
    bsctest: {
        url: "https://data-seed-prebsc-1-s1.binance.org:8545",
        accounts: [process.env.PRIV_KEY],
        gasPrice: 20000000000, 
        saveDeployments: true,
        blockGasLimit: 1000000
    },
    bsc: {
        url: "https://bsc-dataseed.binance.org",
        accounts: [process.env.PRIV_KEY],
        gasPrice: 20000000000,
        saveDeployments: true,
        blockGasLimit: 1000000
    }
},

etherscan:{
  apiKey:process.env.API_KEY,
}
};

