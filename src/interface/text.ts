import { Theme } from '@mui/material';
import { ColorType } from '../assets/theme/theme';

export interface IText {
  color?: ColorType;
  theme?: Theme;
  hover?: ColorType;
}
