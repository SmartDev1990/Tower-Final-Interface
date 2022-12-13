import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: '#05c2b7',
  primaryBright: "#53DEE9",
  primaryDark: "#024942",
  secondary: '#FEA300',
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#31D0AA",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#FFC700',
  secondary80: '#9A6AFF80',
  background: '#623e90',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#372F47',
  inputSecondary: '#262130',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#F4EEFF',
  text99: '#F4EEFF99',
  textDisabled: '#666171',
  textSubtle: '#B8ADD2',
  disabled: '#524B63',
  gradients: {
     Bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
     InverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
     CardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
     Blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
     Violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
     VioletAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
     Gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
     Bold: 'linear-gradient(#53DEE9, #9A6AFF)',
  }
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#FFC700',
  secondary80: '#9A6AFF80',
  background: '#623e90',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#372F47',
  inputSecondary: '#262130',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#F4EEFF',
  text99: '#F4EEFF99',
  textDisabled: '#666171',
  textSubtle: '#B8ADD2',
  disabled: '#524B63',
  gradients: {
     Bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
     InverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
     CardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
     Blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
     Violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
     VioletAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
     Gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
     Bold: 'linear-gradient(#53DEE9, #9A6AFF)',
  }
};
