import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Container, Theme } from '@mui/material';
export const HeaderStyled = styled(Container)<{ theme?: Theme }>`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a<{ theme?: Theme }>`
  font-size: 2.5rem;
  font-weight: bolder;
  cursor: pointer;
  display: block;

  ${({ theme }) =>
    true &&
    css`
      color: ${theme.colors.dominant50};
      text-shadow: 0 0 5px ${theme.colors.accent},
        0 0 10px ${theme.colors.accent}, 0 0 15px ${theme.colors.accent},
        0 0 20px ${theme.colors.accent}, 0 0 30px ${theme.colors.accent},
        0 0 40px ${theme.colors.accent}, 0 0 55px ${theme.colors.accent},
        0 0 75px ${theme.colors.accent};
    `}
`;

export const ModeWrapper = styled.div<{ theme?: Theme }>`
  margin-left: 50px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  font-size: 25px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    left: 0px;
    top: 30px;
  }
`;

export const NavBar = styled.ul<{ theme?: Theme; open: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  .link {
    margin-left: 50px;
    width: max-content;
    text-align: center;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    width: 300px;
    max-width: 100%;
    z-index: 40;
    background: ${({ theme }) => theme.colors.dominant50};
    right: 0;
    top: 0;
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
    padding-inline-start: 0px !important;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    transform: translatex(200%);
    transition: all 0.3s ease-in-out;
    box-shadow: -150px 0px 5px 2px rgba(0, 0, 0, 0.75);

    ${({ open }) =>
      open &&
      css`
        transform: translatex(0%);
      `}
    .link {
      width: 100%;
      padding: 15px;
      margin-top: 40px;
      font-weight: bold;
      font-size: 1.3rem;
      margin-left: 0 !important;
    }

    .harmburger {
      position: absolute;
      right: 20px;
      top: 40px;
    }
  }
`;

export const Harmburger = styled.div<{ theme?: Theme }>`
  display: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
  }
`;
