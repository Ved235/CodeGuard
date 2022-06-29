import React, { useState } from "react";
import { ThemeProvider,Button } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import { darkTheme, lightTheme } from '../theme/index';
import SEO from "components/seo";
import Layout from "../components/layout";

import Banner from "sections/banner";
import Services from "sections/services";

import VideoOne from "sections/video-one";
import CallToAction from "sections/call-to-action";
import BoostAgencies from "sections/boost-agencies";


export default function IndexPage({props}) {

  const [theme, setTheme] = useState("light");

const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
    console.log(theme)
}

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <StickyProvider>
        <Layout>
    
          <SEO title="CodeGuard" />
          <Banner />
          <Services />
          <BoostAgencies />
          <VideoOne />

          <CallToAction />
        </Layout>
        <Button onClick={toggleTheme} sx={{  color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: '500ms',
 
      
      fontSize: 2,
      '&:hover': {
        bg: 'secondary',
      }}}>Switch Theme</Button>
      </StickyProvider>
    </ThemeProvider >
  );
}
