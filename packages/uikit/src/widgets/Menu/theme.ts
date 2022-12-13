import { darkColors, lightColors } from "../../theme/colors";

export interface NavThemeType {
  background: string;
}

export const light: NavThemeType = {
  background: '#defbfb',
};

export const dark: NavThemeType = {
  background: 'rgba(39, 38, 44, 0.7)',
};
