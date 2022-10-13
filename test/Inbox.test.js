const assert = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode} = require('../compile');


let accounts;
let inbox;
const INITIAL_MESSAGE = "Initial Message!!";
beforeEach(async () => {
    //Get a list of all accounts

    accounts = await web3.eth.getAccounts();
    //User one of those account to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_MESSAGE]})
        .send({from: accounts[0],gas:1000000});
});

describe('Inbox',() => {
    it('should deploy the contract',()=> {
        assert.ok(inbox.options.address);
    })

    it('should have initial Message',async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,INITIAL_MESSAGE);
    });

    it('should can change message',async () => {
        const newMessage = "AHAHA";
        await inbox.methods.setMessage(newMessage).send({ from:accounts[0] });
        const messageFromChain = await inbox.methods.message().call();
        assert.equal(messageFromChain,newMessage);
    });
})
