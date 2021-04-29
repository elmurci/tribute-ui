import {DEFAULT_ETH_ADDRESS, DEFAULT_DAO_NAME} from '../helpers';

export const daoResponse = {
  tributes: [
    {
      id: DEFAULT_ETH_ADDRESS,
      daoAddress: DEFAULT_ETH_ADDRESS,
      name: DEFAULT_DAO_NAME,
      totalUnits: null,
      bank: {
        id: DEFAULT_ETH_ADDRESS,
        bankAddress: DEFAULT_ETH_ADDRESS,
      },
      __typename: 'Molochv3S',
    },
  ],
};