import styled from '@emotion/styled';
import { Theme } from '@mui/material';

interface Props {
  theme?: Theme;
}

export const BlogCardWrapper = styled.div<Props>`
  width: 100%;
  transition: all 0.3s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent50};
  cursor: pointer;
  transition: all 0.3s ease-in-out linear 0.3s;
  h4 {
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
  }

  .timeformat {
    background-color: ${({ theme }) => theme.colors.dominant50};
    width: max-content;
    padding: 5px;
    border-radius: 4px;
  }
  &:hover {
    transform: scale(1.009);
  }
`;
