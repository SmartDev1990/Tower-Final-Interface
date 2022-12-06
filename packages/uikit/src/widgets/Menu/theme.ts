import { darkColors, lightColors } from "../../theme/colors";

export interface NavThemeType {
  background: string;
}

export const light: NavThemeType = {
  background: '#44fafe',
};

export const dark: NavThemeType = {
  background: darkColors.backgroundAlt,
};
