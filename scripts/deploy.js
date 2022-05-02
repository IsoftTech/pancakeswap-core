const hre = require("hardhat");

async function main() {
  // eslint-disable-next-line no-undef
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  
  const feeSetter = "0x70E7478b0a8c919DBD7032a0E0d44010A2A5A765";
  const PancakeFactory = await hre.ethers.getContractFactory("PancakeFactory");
  const pancakeFactory = await PancakeFactory.deploy(feeSetter);

  await pancakeFactory.deployed();
  console.log("factory deployed to:", pancakeFactory.address.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });