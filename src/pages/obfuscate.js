import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import CustomHeader from "../components/header/customHeader";

import Form from "../components/form";

export default function ObfuscatePage() {
  return (
    <ThemeProvider theme={theme} css={{ overflow: "hidden" }}>
      <StickyProvider>
<CustomHeader />
        <SEO title="CodeGuard" />
        <Form />
  
      </StickyProvider>
    </ThemeProvider>
  );
}
