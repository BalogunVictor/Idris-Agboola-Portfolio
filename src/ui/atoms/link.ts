import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorType } from '../../assets/theme/theme';
import { IText } from '../../interface/text';
interface ILinkStyled extends IText {
  bg?: ColorType;
}
export const LinkStyled = styled.a<ILinkStyled>`
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme, color }) => theme.colors[color || 'compliment']};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme, hover }) => hover && theme.colors[hover]};
    text-decoration: underline;
  }

  ${({ bg, theme, hover, color }) =>
    bg &&
    css`
      background-color: ${theme.colors[bg]};
      padding: 3px 5px;
      border-radius: 5px;
      font-weight: bold;
      &:hover {
        color: ${theme.colors['dominant50']};
        background-color: ${hover && theme.colors[hover]};
        text-decoration: none;
      }
    `}
`;
