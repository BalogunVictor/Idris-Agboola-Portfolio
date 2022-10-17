import { ArrowForward } from '@mui/icons-material';
import { Stack } from '@mui/material';
import React from 'react';
import { AnimationIconWrapper } from '../../atoms/button';
import { Text } from '../../atoms/text';
import Link from 'next/link';
interface Props {
  text: string;
  href?: string;
}
function LearnMore({ text, href }: Props) {
  return (
    <Link href={href || '/'}>
      <Text as="a">
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: { xs: 2, md: 4 } }}
        >
          <Text>{text}</Text>
          <AnimationIconWrapper>
            <ArrowForward />
          </AnimationIconWrapper>
        </Stack>
      </Text>
    </Link>
  );
}

export default LearnMore;
