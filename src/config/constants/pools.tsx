import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { testnetTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(testnetTokens)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('1000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto TW</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${testnetTokens.wbnb.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake TW</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${testnetTokens.wbnb.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${testnetTokens.wbnb.address}.png`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      256256: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      56: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      512512: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      256256: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      56: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      512512: '0xFb488AB713F6B58b0ACc9B38C8A118F9A860e99c',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '100',
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      256256: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      56: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      512512: '0xFb488AB713F6B58b0ACc9B38C8A118F9A860e99c',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '100',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.busd,
    contractAddress: {
      256256: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      56: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      512512: '0xFb488AB713F6B58b0ACc9B38C8A118F9A860e99c',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '100',
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.usdt,
    contractAddress: {
      256256: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      56: '0xdd25bdce10e6c7d4bb4804fe1f5d2aa04aac8d01',
      512512: '0xFb488AB713F6B58b0ACc9B38C8A118F9A860e99c',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '100',
    isFinished: false,
  },
  // {
  // 	sousId: 3,
  // 	stakingToken: serializedTokens.xRice,
  // 	earningToken: serializedTokens.cake,
  // 	contractAddress: {
  // 		256256: '0xDa492E9c88E93dcF18c17f441a1938A746Bf9448',
  // 		56: '',
  // 		512512: '',
  // 	},
  // 	poolCategory: PoolCategory.CORE,
  // 	tokenPerBlock: '0.06',
  // 	isFinished: false,
  // },
  // {
  // 	sousId: 4,
  // 	stakingToken: serializedTokens.xRice,
  // 	earningToken: serializedTokens.wbnb,
  //   contractAddress: {
  // 		256256: '0xd2E9aE5178E9eeba6857a20Aef93C767B087c6eD',
  // 		56: '',
  // 		512512: '',
  // 	},
  // 	poolCategory: PoolCategory.CORE,
  // 	tokenPerBlock: '100',
  // 	isFinished: false,
  // },
]

// known finished pools
const finishedPools = [
  /* {
    sousId: 285,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sdao,
    contractAddress: {
      256256: '',
      56: '0x168eF2e470bfeAEB32BE52FB218A41483904851c',
      512512: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.405',
    version: 3,
  }, */
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
