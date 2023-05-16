import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Providers from "@/components/nextAuth/Providers";
import MtProviders from "@/components/materialTailwind/MtProviders";
import Layout from "@/components/layout";
import { Suspense } from "react";
import Loading from "../components/homepage/rootLoading";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MtProviders>
            {/* <Suspense fallback={<Loading />}> */}
            <Layout>{children}</Layout>
            {/* </Suspense> */}
          </MtProviders>
        </Providers>
      </body>
    </html>
  );
}
export const metadata = {
  title: "Home Page",
  description: "Welcome to Next.js",
};
