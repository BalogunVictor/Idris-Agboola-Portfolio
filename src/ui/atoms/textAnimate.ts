import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const T = styled.div<{ theme?: Theme }>`
  position: relative !important;
  height: 5em;

  h2 {
    font-size: 4em;
    position: absolute;
    top: 0;
    left: 0;
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
  }

  h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.accent};
  }

  h2:nth-child(2) {
    color: ${({ theme }) => theme.colors.accent};
    animation: animate 4s ease-in-out infinite;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 3em;
    h2 {
      font-size: 2rem;
    }
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;
