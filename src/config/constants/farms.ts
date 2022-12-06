import { testnetTokens, serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens(testnetTokens)
export const CAKE_BNB_LP_MAINNET = '0xd611F8869A282CfD79723836e061bC118eB40A9b'

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
    pid: 2,
    v1pid: 2,
    lpSymbol: 'TW-WCMP LP',
    lpAddresses: {
      256256: '',
      56: '',
      512512: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 3,
  //   v1pid: 3,
  //   lpSymbol: 'BUSD-WCMP LP',
  //   lpAddresses: {
  //     256256: '',
  //     56: '',
  //     512512: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
