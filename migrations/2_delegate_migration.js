const Delegate = artifacts.require("Delegate");
const Delegation = artifacts.require('Delegation');
const Hacklation = artifacts.require('Hacklation');

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Delegate, accounts[0])
  .then(() => deployer.deploy(Delegation, Delegate.address))
  .then(() => deployer.deploy(Hacklation, Delegation.address));
};


