import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

import { ThemeProvider } from "@material-tailwind/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  // console.log(router.pathname);

  if (router.pathname === "/_error") return <Component {...pageProps} />;
  if (router.pathname === "/login")
    return (
      <SessionProvider session={session}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    );

  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
