import { getDefaultConfig, Chain } from '@rainbow-me/rainbowkit';
import {
  sepolia
} from 'wagmi/chains';

// Define your custom network
const suave_toliman = {
  id: 33_626_250,
  name: 'SUAVE Toliman',
  iconUrl: 'https://docs.flashbots.net/img/brand-assets/flashbots_icon.png',
  nativeCurrency: {
    name: 'Toliman ETH',
    symbol: 'tETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.toliman.suave.flashbots.net'],
    },
    public: {
      http: ['https://rpc.toliman.suave.flashbots.net'],
    },
  },
  blockExplorers: {
    default: { name: 'Toliman Explorer', url: 'https://explorer.toliman.suave.flashbots.net' },
  },
  testnet: true,
} as const satisfies Chain;

// Define your custom network
export const local_suave_toliman = {
  id: 16813125,
  name: 'Local SUAVE Toliman',
  iconUrl: 'https://docs.flashbots.net/img/brand-assets/flashbots_icon.png',
  nativeCurrency: {
    name: 'SUAVE Devnet Eth',
    symbol: 'sETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545'],
    },
    public: {
      http: ['http://localhost:8545'],
    },
  },
  testnet: true,
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    sepolia,
    suave_toliman,
    local_suave_toliman
  ],
  ssr: true,
});
