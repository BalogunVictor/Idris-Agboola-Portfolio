import * as React from 'react';
import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Layout from '../layout';
import TextAnimated from '../ui/molecules/textAnimated';
import NextLink from '../ui/molecules/nextLink';
import { Text } from '../ui/atoms/text';
import { LinkStyled } from '../ui/atoms/link';
import { T } from '../ui/atoms/textAnimate';
import LearnMore from '../ui/molecules/learnMore';

const Home: NextPage = () => {
  return (
    <Layout>
      <T>
        <h2>I&apos;m Idris Agboola</h2>
        <h2>I&apos;m Idris Agboola</h2>
      </T>

      <Box sx={{ marginTop: { xs: 2, md: 4 } }}>
        <Text>
          A software engineer and fashion enthusiast residing in Lagos, Nigeria.
          I am highly experienced in developing secure and dynamic applications.
        </Text>
      </Box>
      <Box sx={{ marginTop: { xs: 2, md: 4 } }}>
        <Text>
          I love using my skill set to simplify work for enterprises and improve
          the lives of people around me. View my Projects,{'  '}
          <NextLink href="/" bg="dominant50" color="accent" hover="compliment">
            Articles,
          </NextLink>
          {'   '}
          <NextLink
            href="/resume"
            bg="dominant50"
            color="accent"
            hover="compliment"
          >
            Resumé,
          </NextLink>
          {'   '}
          <NextLink
            href="/contact"
            bg="dominant50"
            color="accent"
            hover="compliment"
          >
            Contact Me
          </NextLink>
          {'   '}
          or send me an email at{' '}
          <LinkStyled
            bg="dominant50"
            color="accent"
            hover="compliment"
            href="mailto: agboolaisholaidreez@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            agboolaisholaidreez@gmail.com
          </LinkStyled>
          .
        </Text>
      </Box>
      <Box sx={{ width: '230px', maxWidth: '100%', cursor: 'pointer' }}>
        <LearnMore text="Learn More About Me" href="/about" />
      </Box>

      <TextAnimated text={'IRIS WELCOME YOU'} />
    </Layout>
  );
};

export default Home;
