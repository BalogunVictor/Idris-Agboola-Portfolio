import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { Theme } from '@mui/material';
interface Props {
  overLink: boolean;
  theme?: Theme;
}
const Scale = keyframes`
0%{
  width: 50px;
  height: 50px;
}
100%{
  width: 40px;
  height: 40px;
}



`;
export const CustomCusorWrapper = styled.div<Props>`
  z-index: 100;
  position: fixed;
  width: 50px;
  height: 50px;
  animation: ${Scale} 1s ease-in-out infinite;
  .cursor {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.dominant50};
    border-radius: 50%;
    position: fixed;
    pointer-events: none;

    &::before {
      content: '';
      display: flex;
      height: inherit;
      color: ${({ theme }) => theme.colors.dominant50};
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      font-weight: bolder;
      background-color: ${({ theme }) => theme.colors.dominant50};
      height: 5px;
      width: 5px;

      border-radius: 10px;
    }
  }
  .link-cursor {
    display: none;
  }
  ${({ overLink, theme }) =>
    overLink &&
    css`
      .cursor {
        display: none;
      }

      .link-cursor {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        //background-color: ${theme.colors.compliment};
        border-radius: 50%;
        border: 2px solid ${theme.colors.dominant50};
        position: fixed;
        pointer-events: none;

        &::before {
          content: 'Open';
          display: flex;
          height: inherit;
          color: ${theme.colors.dominant50};
          justify-content: center;
          align-items: center;
          font-size: 0.7rem;
          font-weight: bolder;
          background-color: ${theme.colors.accent50};
          height: 20px;
          width: 50px;

          border-radius: 10px;
        }
      }
    `}

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
    overflow: hidden;
  }
`;
