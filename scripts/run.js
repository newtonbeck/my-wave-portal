const { ethers } = require("hardhat");

const main = async () => {
    const [owner, randomPerson] = await ethers.getSigners();
    const contractFactory = await ethers.getContractFactory("WavePortal");
    const wavePortalContract = await contractFactory.deploy({
        value: ethers.utils.parseEther("0.1"),
    });

    await wavePortalContract.deployed();

    console.log("Contract deployed to:", wavePortalContract.address);
    console.log("Contract deployed by:", owner.address);

    let contractBalance = await ethers.provider.getBalance(wavePortalContract.address);
    console.log("Contract balance:", ethers.utils.formatEther(contractBalance));

    let randomPersonBalance = await ethers.provider.getBalance(randomPerson.address);
    console.log("Random person balance:", ethers.utils.formatEther(randomPersonBalance));

    const waveTransactionOne = await wavePortalContract.connect(randomPerson).wave("Nice contract, congrats!");
    await waveTransactionOne.wait();

    contractBalance = await ethers.provider.getBalance(wavePortalContract.address);
    console.log("Contract balance:", ethers.utils.formatEther(contractBalance));

    randomPersonBalance = await ethers.provider.getBalance(randomPerson.address);
    console.log("Random person balance:", ethers.utils.formatEther(randomPersonBalance));

    const waveTransactionTwo = await wavePortalContract.connect(randomPerson).wave("Nice contract, congrats!");
    await waveTransactionTwo.wait();
};

main()
    .then(() => {
        process.exit(0);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
