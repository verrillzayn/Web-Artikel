import Navbar from "./navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  // if (router.pathname === "/login") return <Component {...pageProps} />;
  // console.log(router.pathname);

  return (
    <>
      <div className={`pt-[50px] bg-primaryTheme`}>
        <div
          className={`w-[96%] sm:w-[93%] md:w-[92%]  ${
            router.pathname === "/admin/dashboard" ? "lg:w-[99%]" : "lg:w-[90%]"
          } m-auto`}
        >
          {router.pathname === "/admin/dashboard/[id]" ? "" : <Navbar />}
          {/* {router.pathname === "/admin/dashboard" ? "" : <Navbar />} */}

          {/* <Navbar /> */}
          <main
            className={`bg-white ${
              router.pathname === "/admin/dashboard" ? "rounded-t-2xl" : ""
            }`}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
