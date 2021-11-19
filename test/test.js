const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MarkanftToken", function () {
  it("total supply", async function () {
    const MTContract = await ethers.getContractFactory("MarkanftToken");
    const contract = await MTContract.deploy();
    await contract.deployed();

    expect(await contract.totalSupply()).to.equal("1000000000000000000000");
  });
});
