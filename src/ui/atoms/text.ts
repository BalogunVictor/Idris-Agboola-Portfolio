import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IText } from '../../interface/text';

export const Text = styled.p<IText>`
  font-weight: 400;
  line-height: 1.7;

  color: ${({ theme, color, as }) =>
    as === undefined
      ? theme.colors[color || 'accent50']
      : theme.colors[color || 'accent']};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme, hover }) => hover && theme.colors[hover]};
  }

  ${({ as }) =>
    as === 'h1' &&
    css`
      font-size: 3.052rem;
      font-weight: 600;
      line-height: 1.2;
    `}
  ${({ as }) =>
    as === 'h2' &&
    css`
      font-size: 2.441rem;
      font-weight: 600;
      line-height: 1.2;
    `}
    ${({ as }) =>
    as === 'h3' &&
    css`
      font-size: 1.953rem;
      line-height: 1.3;
      font-weight: 600;
      line-height: 1.2;
    `}
    ${({ as }) =>
    as === 'h4' &&
    css`
      font-size: 1.563rem;
      font-weight: 600;
      line-height: 1.2;
    `}
    ${({ as }) =>
    as === 'h5' &&
    css`
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
    `}

    
    ${({ as }) =>
    as === 'figcaption' &&
    css`
      font-size: 0.8rem;
      text-decoration: none;
    `};
`;
