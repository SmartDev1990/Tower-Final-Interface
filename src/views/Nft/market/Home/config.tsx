import { LinkExternal } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my CMP?'),
      description: [
        t(
          'Trades are settled in WCMP, which is a wrapped version of CMP used on CMP Smart Chain. That means that when you sell an item, WCMP is sent to your wallet instead of CMP.',
        ),
        t('You can instantly swap your WCMP for CMP with no trading fees on TowerSwap.'),
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        <LinkExternal href="">
          {t('Form will open soon')}
        </LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by TowerSwap from sales are used to buy back and BURN TW tokens in our weekly TW burns.',
        ),
        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the TW burns.',
        ),
      ],
    },
  ]
}

export default config
