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
  syrub: new Token(
    ChainId.CMP,
    '0xd6274E2043bce7E2b2B84949e6a84A0a6C5C604D',
    18,
    'Syrub',
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
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  dai: new Token(
    MAINNET,
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  usdt: new Token(
    MAINNET,
    '0x55d398326f99059fF775485246999027B3197955',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
} as const)

export const testnetTokens = defineTokens({
  wbnb: new Token(
    ChainId.TESTNET,
    '0xaB6b6212e5443228D586cE5Aeb54B02b185208Cc',
    18,
    'WCMP',
    'Wrapped CMP',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.TESTNET,
    '0xaB6b6212e5443228D586cE5Aeb54B02b185208Cc',
    18,
    'WCMP',
    'Wrapped CMP',
    'https://www.binance.com/',
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
    '0xA5d20d84deeEd3850a7538e993E3b2592bf997A0',
    18,
    'BUSDt',
    'BUSD tower',
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
      return { ...accum, [key]: cmpToken[key] || testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof cmpToken & typeof mainnetTokens & typeof testnetTokens)
  }

  return cmpToken
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
