import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
}
