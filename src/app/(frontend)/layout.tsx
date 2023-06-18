"use client";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./_core/Footer";
import Header from "./_core/header";

const defaultTheme = createTheme({});
export default function FrontendLayout({ children }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth={false} disableGutters>
        <Header />
        <ContentView>{children}</ContentView>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

function ContentView({ children }: any) {
  return (
    <Container maxWidth={false} disableGutters>
      {children}
    </Container>
  );
}
