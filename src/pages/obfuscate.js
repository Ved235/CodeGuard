import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Form from '../components/form';



export default function ObfuscatePage() {
  return (
    <ThemeProvider theme={theme} css={{overflow: 'hidden'}}>
      <StickyProvider>
        <Layout>
          <SEO title="CodeGuard" />
          <Form />

        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
