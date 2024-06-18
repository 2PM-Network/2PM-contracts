// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface ITwoPMDAO {
    function initialize() external;

    function startTrainRound(bytes32 taskId) external;

    function registerNode(bytes32 taskId, address node) external;

    function endTrainRound(bytes32 taskId) external;
}
