# Tribute DAO DApp

Related supporting repositories:

- [openlawteam/tribute-contracts](https://github.com/openlawteam/tribute-contracts)
- [openlawteam/tribute-subgraph](https://github.com/openlawteam/tribute-subgraph)
- [openlawteam/snapshot-hub (erc-712 branch)](https://github.com/openlawteam/snapshot-hub/tree/erc-712)
- [openlawteam/snapshot-js-erc712](https://github.com/openlawteam/snapshot-js-erc712)

## Developer Setup

### Local `.env` File

When running locally you'll need a `.env` file in the root directory with the following environment variables:

```sh
REACT_APP_ENVIRONMENT=localhost
REACT_APP_INFURA_PROJECT_ID_LOCAL=...
REACT_APP_DAO_REGISTRY_CONTRACT_ADDRESS=...
REACT_APP_MULTICALL_CONTRACT_ADDRESS=...
REACT_APP_SNAPSHOT_HUB_API_URL=http://localhost:8081
REACT_APP_COUPON_API_URL=http://localhost:8080
REACT_APP_SNAPSHOT_SPACE=tribute
REACT_APP_GRAPH_CORE_URL=...
```

NOTE:

- `REACT_APP_INFURA_PROJECT_ID_LOCAL` is the value of your Infura PROJECT ID key.
- `REACT_APP_DAO_REGISTRY_CONTRACT_ADDRESS` is the address of the `DaoRegistry` smart contract deployed to your network.
- `REACT_APP_MULTICALL_CONTRACT_ADDRESS` is the address of the `Multicall` smart contract deployed to your network.
- `REACT_APP_SNAPSHOT_HUB_API_URL` is the url of [snaphot-hub](https://github.com/openlawteam/snapshot-hub/tree/erc-712) running locally in a container.
- `REACT_APP_COUPON_API_URL` is the url of the [coupon-manager](https://github.com/openlawteam/coupon-manager) running locally in a container.
- `REACT_APP_SNAPSHOT_SPACE` is the unique name registered in Snapshot Hub under which proposals, votes, etc. will be stored.
- `REACT_APP_GRAPH_CORE_URL` is the url of the core [subgraph](#running-the-local-graph-node) running locally in a container.

#### Additional Required Environment Variables for KYC Onboarding

If you want to use the [KYC Onboarding adapter](https://github.com/openlawteam/tribute-contracts/blob/master/website/docs/contracts/adapters/onboarding/KycOnboarding.md), you will also need the following environment variables:

```sh
REACT_APP_ENABLE_KYC_ONBOARDING=true
REACT_APP_KYC_BACKEND_URL=http://localhost:3003/kyc-certificate
REACT_APP_KYC_FORMS_URL=...
```

NOTE:

- `REACT_APP_KYC_BACKEND_URL` is the url of the [KYC backend service](https://github.com/openlawteam/lao-backends) running locally in a container.
- `REACT_APP_KYC_FORMS_URL` is the url of the KYC forms interface.

#### Optional Environment Variables for ERC20 Onboarding

```sh
REACT_APP_ONBOARDING_TOKEN_ADDRESS=...
```

NOTE:

- `REACT_APP_ONBOARDING_TOKEN_ADDRESS` is the address of the ERC20 token that will be contributed in exchange for membership units. By default, the Onboarding and KycOnboarding interfaces are configured to handle Ether as the contribution token. If a valid ERC20 address is set for this environment variable, the Onboarding and KycOnboarding interfaces will be configured to accept that ERC20 token instead.

_Note that this configuration should be consistent with how the actual Onboarding and KycOnboarding smart contracts have been configured._

#### Optional Environment Variables for Additional adapter/extension subgraphs

```sh
REACT_APP_GRAPH_COUPON_ONBOARDING_URL=...
REACT_APP_GRAPH_NFT_EXTENSION_URL=...
```

NOTE:

- `REACT_APP_GRAPH_COUPON_ONBOARDING_URL` is the url of the optional coupon onboarding [subgraph](#running-the-local-graph-node) running locally in a container.
- `REACT_APP_GRAPH_NFT_EXTENSION_URL` is the url of the optional NFT extension [subgraph](#running-the-local-graph-node) running locally in a container.

#### Optional Environment Variables for Local Development

```sh
##
# Alchemy API key
#
# i.e. Transfers API for getting total ETH amount contributed to DAO multi-sig.
##
REACT_APP_ALCHEMY_API_KEY=...

# Can be set to override using the Ganache private network as the default local development chain.
REACT_APP_DEFAULT_CHAIN_NAME_LOCAL=<MAINNET | ROPSTEN | RINKEBY | GOERLI | KOVAN | GANACHE>
```

### Ganache Blockchain Setup

#### Using [Ganache CLI](https://github.com/trufflesuite/ganache-cli) (more stable):

- `npm install -g ganache-cli` (if not already installed)
- `ganache-cli --port 7545 --networkId 1337 --chainId 1337 --blockTime 3`

#### Using [Ganache GUI app](https://www.trufflesuite.com/ganache):

- Change the Network ID to `1337`. That is necessary in order to connect MetaMask to your Ganache network. The DApp is configured for Ganache to be `chainId` `1337`.
- Turn off Automine and set the Mining Block Time (Seconds) to `3`.

---

**Remember**: After you deploy the `DaoRegistry` and `Multicall` smart contracts on your local Ganache network you must include the deployed contract's address in your local root `.env` file. Additionally, you will need to add the contract addresses for the deployed adapters and extensions contracts to the config in `/src/config.ts`.

#### Saving Ganache Data

If you want to use the same accounts (`-d`) and data (`--db`) from a previous Ganache chain, you can add the below arguments to the `ganache-cli` command. The `--db` path can be any path with any structure. Ganache creates many "loose" files, so it may be easiest to keep each chain in its own directory (e.g. `some/path/your-ganache-dbs/01-01-1999`).

`... -d --db some/path/your-ganache-dbs/[DIR_WHERE_CHAIN_DATA_WILL_BE_SAVED]`

[Ganache CLI Options](https://github.com/trufflesuite/ganache-cli#options)

#### Troubleshooting

- **Invalid address, and/or nonce-related errors:** If you're developing on Ganache and the app will not start due to a vague error about an "invalid address", or you're receiving transaction errors from the app related to an incorrect nonce(s), then resetting your Ganache account(s) in MetaMask (or other wallet, if possible) should fix this. To reset your accounts in MetaMask (or other wallet) click: _Settings->Advanced->Reset Account_.

## Running the Local graph-node

Follow the instructions [here](https://github.com/openlawteam/tribute-subgraph/blob/main/docker/README.md) to set up and run the local graph-node and to deploy the mandatory core subgraph and any optional adapter/extension subgraphs.

## GitHub Pages Deployments

Deployments for the development environment are handled automatically with a GitHub Action:

- `GitHub Pages development deployment`: push to `main` branch -> https://demo.tributedao.com

## Developer Notes

### Node Version

If developing and running manually using `npm start`, or adding/updating NPM packages using `npm install`, it's recommended to use Node `^14.0.0` and NPM `^7.0.0` (listed in our `package.json`'s `engines` field). If using `nvm`, run `nvm use` inside the project root and the correct version of Node will be used (be aware Node 14 ships with NPM 6, so you will need to upgrade `npm` using `npm i -g npm`).

[NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) is an open-sourced tool which can easily switch between different versions of Node. For this project we currently use Node `14.x`. If you don't have NVM, [it's easy to install](https://github.com/nvm-sh/nvm#installing-and-updating). If you don't want to use NVM, just be sure you have Node 14.x and NPM 7.x.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
