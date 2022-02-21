# Disperse DAPP on Aurora Testnet

Disperse DAPP is a batching protocol for both native currency and ERC20 tokens that can help reduce gas cost for multiple transfers by batching them in a single block.

DAPP is live at https://blissful-tereshkova-0e2032.netlify.app/

Slides : https://docs.google.com/presentation/d/19wzOvgACY7dBTs_fTPHB9Llhplx8xCL5zqILMo2Cy7Q/edit#slide=id.gb59c7ace29_0_66

Demo Video : https://vimeo.com/679863822            [ No Audio ]

Contract Address : ```0x30d25c739BF4859DC8C12c67E89954824bfb39FE``` [on AURORA Testnet]

MIT License

## Installation and Tests

### Backend (Truffle)

Use .secret file to store mnemonic or make suitable changes to truffle-config.js

```npm install truffle-hdwallet-provider @openzeppelin/contracts@2.5.0 ``` To install dependencies

```truffle test``` to run tests. (You may have to install ganache-cli)

```truffle migrate --reset --network aurora``` to migrate to the Aurora testnet.

### Frontend (create-react-app)

``` yarn install ```

``` yarn start ```

### Documentation

This DAPP is based on Artem K's [disperse app on ethereum. (PDF Link)](https://disperse.app/disperse.pdf)

My contract is compatible with solidity 0.5.x (and higher). It is available [here.](https://github.com/encoderafat/disperseAurora/blob/main/truffle/contracts/disperse.sol)

To batch together native currency.

```function disperseEther(address payable[] calldata recipients, uint256[] calldata values) external payable ```

recipients is an array of addresses and the values is the array of amount that is being send to each of the addresses respectively.

To batch together ERC20 tokens.

```function disperseToken(address tokenAddress, address payable[] calldata recipients, uint256[] calldata values) external```

tokenAddress is the contract address of the ERC20 contract. The other values are same as above.

There is also a simplified and unoptimized version of disperseToken that we won't be using for our dapp.

```function disperseTokenSimple(address tokenAddress, address payable[] calldata recipients, uint256[] calldata values) external```
