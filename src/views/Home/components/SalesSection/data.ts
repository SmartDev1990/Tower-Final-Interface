import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'


export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade your favorite Token'),
  bodyText: t(
      'Towerswap is the first dex with an adequate UI for beginners. anyone can trade any token under cadeceus blokchain.  ' +
      'with almost zero fees, lowest slippage and guaranteed asset security will make anyone feel comfortable when trading on our dex. '
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.icecreamswap.com/get-started/swap',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade your favorite NFT items'),
  bodyText: t(
    'Towerswap provides NFT marketplace service, ' +
      'Everyone can buy, sell and trade their NFT here. Towerswap does not charge a listing fee. ' +
      'a fee of 2% of each trade will be taken to buy back TW tokens and burned. ' ,
  ),
  reverse: true,
  primaryButton: {
    to: '',
    text: 'Coming Soon',
    external: false,
  },
  secondaryButton: {
    to: '',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn extra income.'),
  bodyText: t('Get additional income through the features that we have provided, We have prepared farming and staking features so that the tokens that you have work for you, everyone is free to choose where their tokens will be stored and we have prepared a place..'),
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: '',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'coin', alt: t('CAKE token') },
    ],
  },
})
