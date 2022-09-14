const { ethers } = require("hardhat");

const main = async () => {
    const [owner, randomPerson] = await ethers.getSigners();
    const contractFactory = await ethers.getContractFactory("WavePortal");
    const wavePortalContract = await contractFactory.deploy();

    await wavePortalContract.deployed();

    console.log("Contract deployed to:", wavePortalContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;

    waveCount = await wavePortalContract.getTotalWaves();
    console.log("Total wave count before waving:", waveCount);

    const waveTransactionOne = await wavePortalContract.wave();
    await waveTransactionOne.wait();

    const waveTransactionTwo = await wavePortalContract.connect(randomPerson).wave();
    await waveTransactionTwo.wait();

    waveCount = await wavePortalContract.getTotalWaves();
    console.log("Total wave count after waving:", waveCount);

    console.log(`Total waves of ${owner.address} is`, await wavePortalContract.getMyTotalWaves());
    console.log(`Total waves of ${randomPerson.address} is`, await wavePortalContract.connect(randomPerson).getMyTotalWaves());
};

main()
    .then(() => {
        process.exit(0);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
