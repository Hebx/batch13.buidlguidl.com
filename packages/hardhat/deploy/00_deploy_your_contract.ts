import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// BatchRegistry contract address on Optimism
const BATCH_REGISTRY_ADDRESS = "0xcF4ac52079F69C93904e2A4a379cAd1F0C8dA0A9";

/**
 * Deploys your CheckIn contract using the deployer account
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network optimism`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Only deploy CheckIn contract
  await deploy("CheckIn", {
    from: deployer,
    args: [BATCH_REGISTRY_ADDRESS, deployer], // Pass BatchRegistry address and make deployer the owner
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);

  console.log("\nCheckIn deployed to:", await checkIn.getAddress());
  console.log("\nNext steps:");
  console.log("1. Call CheckIn.checkInToBatch() to register your contract");
  console.log("2. Wait for graduation allowlist to be updated\n");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags CheckIn
deployYourContract.tags = ["CheckIn"];
