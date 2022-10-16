import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ResumeWrapper = styled.div<{ theme?: Theme; full?: boolean }>`
  transition: all 0.4s ease-in-out;
  max-width: 100%;
  width: 700px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.accent50};
  .viewer-wrapper {
    height: 750px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 500px;
  }
`;
