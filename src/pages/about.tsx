import { Grid } from '@mui/material';
import React from 'react';
import Layout from '../layout';
import ImgBox from '../ui/molecules/imgBox';
import LearnMore from '../ui/molecules/learnMore';
import aboutItems from '../constants/about';
import VerticalLinearStepper from '../ui/molecules/stepper';
import SEO from '../ui/molecules/seo';
import { LinkStyled } from '../ui/atoms/link';
import { Text } from '../ui/atoms/text';

function About() {
  return (
    <Layout>
      <SEO title="About | Agboola Idris" />
      <Text as="h1">About Me.</Text>
      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{ marginTop: { xs: 4, md: 6 } }}
      >
        <Grid item xs={12} md={6}>
          <Text>
            Hi! my name is Idris Agboola and I love using my skill set to
            simplify work for enterprises.I also like sharing content related to
            the stuff that I have learned over a long time in software
            development so it can offer assistance to other individuals in the
            Dev Community.
          </Text>
          <Text style={{ marginTop: 8 }}>
            fast-forward to today, I have the opportunity to work in{' '}
            <LinkStyled
              bg="dominant50"
              color="accent"
              hover="compliment"
              href="http://www.ritemate.com/"
              rel="noreferrer"
              target="_blank"
            >
              Ritemate technology,
            </LinkStyled>{' '}
            <LinkStyled
              bg="dominant50"
              color="accent"
              hover="compliment"
              href="https://1worq.com/"
              rel="noreferrer"
              target="_blank"
            >
              1worq.
            </LinkStyled>{' '}
            and{' '}
            <LinkStyled
              bg="dominant50"
              color="accent"
              hover="compliment"
              href="##"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              Invoke Creation.
            </LinkStyled>{' '}
            as a software developer. These days, I focus on building accessible,
            inclusive products and digital experiences for Invoke-creation.
          </Text>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            marginBottom: { xs: 5, md: 0 },
            justifyContent: { xs: 'flex-start', md: 'center' },
          }}
        >
          <ImgBox src="/idris.png" />
        </Grid>
      </Grid>
      {aboutItems.map((item, index) => (
        <VerticalLinearStepper
          title={item.title}
          items={item.item}
          key={index}
        />
      ))}

      <LearnMore text="Reach out to me" href="/contact" />
    </Layout>
  );
}

export default About;
