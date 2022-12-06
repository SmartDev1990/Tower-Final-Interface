import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'TowerSwap',
  description:
    'The most popular AMM on Cadeceus by user count! Earn TW tokens through yield farming and Initial Farm Offerings (new token launch model pioneered by TowerSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://i.ibb.co/G3V8HTd/1.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('TowerSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('TowerSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('TowerSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('TowerSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('TowerSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('TowerSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('TowerSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('TowerSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('TowerSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('TowerSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('TowerSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('TowerSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('TowerSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('TowerSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('TowerSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('TowerSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('TowerSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('PancakeSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('PancakeSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('PancakeSwap')}`,
      }
    default:
      return null
  }
}
