import { ChainId, Token } from '@smartdev1990/cmp-sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'

const { CMP, MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

export const defineTokens = <T extends TokenList>(t: T) => t

export const cmpToken = defineTokens({
  wbnb: new Token(
    ChainId.CMP,
    '0xA5d20d84deeEd3850a7538e993E3b2592bf997A0',
    18,
    'WCMP',
    'Wrapped CMP',
    'https://caduceus.foundation/'
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.CMP,
    '0xA5d20d84deeEd3850a7538e993E3b2592bf997A0',
    18,
    'WCMP',
    'Wrapped CMP',
    'https://caduceus.foundation/'
  ),
  cake: new Token(
    ChainId.CMP,
    '0x2DD80bE5B44cdcB3f39dEb9cE483c8f67191f478',
    18,
    'TW',
    'Towerswap Token',
    'https://towerswap.finance',
  ),
  busd: new Token(
  ChainId.CMP,
    '0xb21668048d42d7d6423b070b278f5af14e1f1600',
    18,
    'BUSDt',
    'BUSD tower',
    'https://www.paxos.com/busd/',
  ),
  usdt: new Token(
  ChainId.CMP,
    '0x55a9f6aa17886dc17e407b3ec4570f0ca8b9704a',
    6,
    'USDTt',
    'Tower USDT',
    'https://towerswap.finance',
  ),
  syrup: new Token(
    ChainId.CMP,
    '0x2DD80bE5B44cdcB3f39dEb9cE483c8f67191f478',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://towerswap.finance',
  ),
} as const)

export const mainnetTokens = defineTokens({
  wbnb: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  busd: new Token(
  MAINNET,
    '0xb21668048d42d7d6423b070b278f5af14e1f1600',
    18,
    'BUSDt',
    'BUSD tower',
    'https://www.paxos.com/busd/',
  ),
  usdt: new Token(
  MAINNET,
    '0x55a9f6aa17886dc17e407b3ec4570f0ca8b9704a',
    6,
    'USDTt',
    'Tower USDT',
    'https://towerswap.finance',
  ),
  syrup: new Token(
    MAINNET,
    '0x2DD80bE5B44cdcB3f39dEb9cE483c8f67191f478',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://towerswap.finance',
  ),
} as const)

export const testnetTokens = defineTokens({
  wbnb: new Token(
    ChainId.TESTNET,
    '0xab6b6212e5443228d586ce5aeb54b02b185208cc',
    18,
    'WCMP',
    'Wrapped CMP',
    'https://caduceus.foundation/'
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.TESTNET,
    '0xab6b6212e5443228d586ce5aeb54b02b185208cc',
    18,
    'WCMP',
    'Wrapped CMP',
    'https://caduceus.foundation/'
  ),
  cake: new Token(
    ChainId.TESTNET,
    '0x09FB691A786284e99D122D2B68dE40D253fec299',
    18,
    'TW',
    'TowerTestnet Token',
    'https://towerswap.finance',
  ),
  busd: new Token(
  ChainId.TESTNET,
    '0xb21668048d42d7d6423b070b278f5af14e1f1600',
    18,
    'BUSD',
    'BUSD tower',
    'https://www.paxos.com/busd/',
  ),
  usdt: new Token(
  ChainId.TESTNET,
    '0x55a9f6aa17886dc17e407b3ec4570f0ca8b9704a',
    6,
    'USDT',
    'Tower USDT',
    'https://towerswap.finance',
  ),
  syrup: new Token(
    ChainId.TESTNET,
    '0x2DD80bE5B44cdcB3f39dEb9cE483c8f67191f478',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://towerswap.finance',
  ),
} as const)

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: cmpToken[key] || mainnetTokens[key] || testnetTokens[key] }
    }, {} as typeof cmpToken & typeof mainnetTokens & typeof testnetTokens)
  }

  return testnetToken
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens
