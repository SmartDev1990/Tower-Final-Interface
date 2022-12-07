import { testnetTokens, serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens(testnetTokens)
export const CAKE_BNB_LP_MAINNET = '0xa4B690F4F53caC099549e57e6309A11c79C6Bf56b'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'TW',
    lpAddresses: {
      256256: '',
      56: '',
      512512: '0x40f97e4c238ccea7c25b78a2d56c350ed877c891',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'TW-WCMP LP',
    lpAddresses: {
      256256: '',
      56: '',
      512512: '0xCF506651b80796D34085dADb1c761ebF71BB2b8d',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'TW-BUSD LP',
    lpAddresses: {
      256256: '',
      56: '',
      512512: '0xa4B690F4F53caC099549e57e6309A11c79C6Bf56',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  // {
  //   pid: 3,
  //   v1pid: 3,
  //   lpSymbol: 'BUSD-WCMP LP',
  //   lpAddresses: {
  //     256256: '',
  //     56: '',
  //     512512: '0x6b9dB0B7504e04E2a4E5C4B6B22bD84E9a8710fd',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
