const { ethers } = require("hardhat");

const main = async () => {
    const contractFactory = await ethers.getContractFactory("WavePortal");
    const wavePortal = await contractFactory.deploy({
        value: ethers.utils.parseEther("0.001"),
    });

    await wavePortal.deployed();

    console.log("Contract deployed at", wavePortal.address);
};

main()
    .then(() => {
        process.exit(0);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
