import { Token, ChainId } from '@smartdev1990/cmp-sdk'
import { testnetTokens } from './tokens'
/// import { CAKE_BNB_LP_MAINNET } from './farms'
import { Ifo } from './types'

// export const cakeBnbLpToken = new Token(ChainId.CMP, CAKE_BNB_LP_MAINNET, 18, 'CAKE-BNB LP')

const ifos: Ifo[] = [
  {
   id: 'peel',
   address: '',
    isActive: true,
    name: 'Drops Token ($Drops)',
    poolBasic: {
      saleAmount: '10,000,000 PEEL',
      raiseAmount: '$400,000',
     cakeToBurn: '$0',
     distributionRatio: 0.2,
    },
    poolUnlimited: {
      saleAmount: '40,000,000 PEEL',
      raiseAmount: '$1,600,000',
      cakeToBurn: '$0',
      distributionRatio: 0.8,
    },
    currency: testnetTokens.cake,
    token: testnetTokens.busd,
    releaseBlockNumber: 19964276,
    campaignId: '511300000',
    articleUrl:
      'https://pancakeswap.finance/voting/proposal/bafkreibomj5nilvyckdro7ztmm62syt55dcfnonxs63ji6hm2ijq35lru4',
    tokenOfferingPrice: 0.04,
    version: 3.2,
    twitterUrl: 'https://twitter.com/MetaApesGame',
    description:
      'Meta Apes is a free-to-play, play-and-earn massively multiplayer online (MMO) strategy game designed for mobile and the first game to launch on the BNB Sidechain with their own dedicated chain, Ape Chain.',
    vestingTitle: 'Utilize $PEEL for gas and governance in the Meta Apes ecosystem!',
  },
]

export default ifos
