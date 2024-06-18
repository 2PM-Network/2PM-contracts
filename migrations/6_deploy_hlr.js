const identity = artifacts.require("IdentityContract");
const datahub = artifacts.require("DataHub");
const hlr = artifacts.require("HLR");

module.exports = async function (deployer) {
    const identityInstance = await identity.deployed()
    const datahubInstance = await datahub.deployed()
    const twoPMDAOAddr = "0x"
    await deployer.deploy(hlr, identityInstance.address, datahubInstance.address, twoPMDAOAddr);
    // TODO switch the DAO owner to the hlr address
};
