// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {

    mapping(address => uint256) waves;

    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a smart contract and I am smart");
    }

    function wave() public {
        waves[msg.sender]++;
        totalWaves++;
        console.log("%s has waved", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }

    function getMyTotalWaves() public view returns (uint256) {
        return waves[msg.sender];
    }

}
