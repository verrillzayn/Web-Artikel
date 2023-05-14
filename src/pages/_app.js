import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ThemeProvider } from "@material-tailwind/react";

function Loading() {
  const router = useRouter();

  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <h1>Loading....</h1>
    </div>
  );
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) =>
      url !== router.pathname && setIsLoading(true);
    const handleRouteChangeComplete = (url) =>
      url === router.pathname && setIsLoading(false);

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  });

  // console.log(router.pathname);

  if (router.pathname === "/_error") return <Component {...pageProps} />;
  if (router.pathname === "/login")
    return (
      <SessionProvider session={session}>
        {isLoading ? (
          <Loading />
        ) : (
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </SessionProvider>
    );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SessionProvider session={session}>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </SessionProvider>
      )}
    </>
  );
}
