import { Box } from '@mui/material';
import React, { useState, ReactElement } from 'react';
import Layout from '../layout';
import { ResumeWrapper } from '../ui/atoms/resumeWarpper';
import SocialShare from '../ui/molecules/socialShare';
import LearnMore from '../ui/molecules/learnMore';

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from '@react-pdf-viewer/default-layout';
import { TransformToolbarSlot, toolbarPlugin } from '@react-pdf-viewer/toolbar';
import Link from '../ui/molecules/nextLink';
import SEO from '../ui/molecules/seo';
import { Text } from '../ui/atoms/text';
import { LinkStyled } from '../ui/atoms/link';

function Resume() {
  // Create new plugin instance
  const { renderDefaultToolbar } = toolbarPlugin();
  const [open, setOpen] = useState(false);
  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    EnterFullScreen: () => <></>,
    SwitchTheme: () => <></>,
    OpenMenuItem: () => <></>,
    Open: () => <></>,
  });

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: (Toolbar: (props: ToolbarProps) => ReactElement) => (
      <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    ),
    sidebarTabs: () => [],
  });

  return (
    <Layout>
      <SEO title="Resume | Agboola Idris" />
      <Box sx={{ maxWidth: '700px', marginBottom: 5 }}>
        <Text as="h1" style={{ marginBottom: 0 }}>
          Resumé.
        </Text>
        <Text>
          Please feel free to contact me via my{' '}
          <Link href="contact" style={{ fontWeight: 'bolder' }}>
            contact page
          </Link>
          . You can{' '}
          <LinkStyled
            style={{ fontWeight: 'bolder' }}
            onClick={handleOpenModal}
          >
            {' '}
            share{' '}
          </LinkStyled>
          or{' '}
          <LinkStyled
            style={{ fontWeight: 'bolder' }}
            download
            href="resume.pdf"
          >
            download
          </LinkStyled>{' '}
          my resume here.
        </Text>
      </Box>
      <ResumeWrapper>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
          <div className="viewer-wrapper">
            <Viewer
              fileUrl="/resume.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </ResumeWrapper>
      <SocialShare handleClose={handleCloseModal} open={open} />
      <LearnMore text="Reach out to me" href="/contact" />
    </Layout>
  );
}

export default Resume;
