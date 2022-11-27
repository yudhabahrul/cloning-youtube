import Header from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AppProvider from "../contexts/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing && router.pathname === "/watchPage") {
    return null;
  }

  return (
    <AppProvider>
      <Header>
        <title>YouTube</title>
      </Header>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
