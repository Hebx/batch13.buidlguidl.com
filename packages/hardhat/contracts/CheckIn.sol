// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public immutable batchRegistry;

    error CheckIn__CheckInFailed();

    constructor(address _batchRegistry, address initialOwner) Ownable(initialOwner) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkInToBatch() external onlyOwner {
        try batchRegistry.checkIn() {
            // Check-in successful
        } catch {
            revert CheckIn__CheckInFailed();
        }
    }
}
