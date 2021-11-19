//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MarkanftToken is ERC20 {
    constructor() ERC20("MarkanftToken", "MKT") {
        _mint(msg.sender, 1000 * 10**18);
    }
}
