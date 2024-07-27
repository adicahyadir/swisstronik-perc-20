const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();
  const deployedContract = await perc20.getAddress();
  fs.writeFileSync("contract.txt", deployedContract);
  
  console.log(`PERC20Sample was deployed to: ${deployedContract}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
