// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.7 < 0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LifeToken is ERC20 {
    constructor() ERC20("LF","Life"){
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}