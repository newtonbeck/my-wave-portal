const { ethers } = require("hardhat");

const main = async () => {
    const contractFactory = await ethers.getContractFactory("WavePortal");
    const wavePortalContract = await contractFactory.deploy();

    await wavePortalContract.deployed();

    console.log("Contract deployed to:", wavePortalContract.address);
};

main()
    .then(() => {
        process.exit(0);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
