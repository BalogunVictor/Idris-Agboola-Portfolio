import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IText } from '../../interface/text';

export const LinkStyled = styled.a<IText>`
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
`;
