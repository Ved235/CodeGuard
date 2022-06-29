import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";

import SEO from "components/seo";
import { darkTheme, lightTheme } from '../theme/index';
import CustomHeader from "../components/header/customHeader";

import Form from "../components/form";

export default function ObfuscatePage() {
  return (
    <ThemeProvider theme={lightTheme} css={{ overflow: "hidden" }}>
      <StickyProvider>
        <CustomHeader />
        <SEO title="CodeGuard" />
        <Form />
      </StickyProvider>
    </ThemeProvider>
  );
}
