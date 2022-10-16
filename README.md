# ethereum-solidity-inbox

First example of a project in solidity, with tests and local private network to test.

This example was deployed to Goerli Test Network, can check the contract on <code>0x0CA2D9AA97288fD925aC854d4fadcf5F057b60b1</code>

Frameworks used:
* mocha ( to unit test ) [] [https://mochajs.org/](https://mochajs.org/)
* ganache ( local private network ) https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/)
* truffle ( to deploy, test and debug ) [https://trufflesuite.com/](https://trufflesuite.com/)
* web3 ( communicate with blockchain ) [https://web3js.readthedocs.io/en/v1.8.0/](https://web3js.readthedocs.io/en/v1.8.0/)


Installation:
```
npm install
```
Setup <code>.env</code> file with the follows vars:
```
SEED_PHRASE='<seed_phrase>'
INFURA_URL='URL'
```

Deploy:
```
node ./deploy.js
```

Tests:
```
npm run test
```
