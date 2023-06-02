import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Providers from "@/components/nextAuth/Providers";
import Layout from "@/components/layout";
import RParallaxProvider from "@/components/react-parallax/ReactParallax";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <RParallaxProvider>
            <Layout>{children}</Layout>
          </RParallaxProvider>
        </Providers>
      </body>
    </html>
  );
}
export const metadata = {
  title: "Home Page",
  description: "Welcome to Next.js",
};
