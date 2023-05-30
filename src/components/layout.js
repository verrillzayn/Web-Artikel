"use client";

import Navbar from "./navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const params = useParams();

  const url = pathname;

  if (url === "/login") return <div>{children}</div>;
  const { slug } = params;

  return (
    <>
      <div className={`pt-[50px] bg-primaryTheme`}>
        <div
          className={`w-[96%] sm:w-[93%] md:w-[92%]  ${
            pathname === "/admin/dashboard" ||
            pathname === "/admin/artikels" ||
            pathname === "/admin/users" ||
            pathname === `/admin/artikels/${slug}`
              ? "lg:w-[99%]"
              : "lg:w-[90%]"
          } m-auto`}
        >
          {pathname === "/admin/dashboard/[id]" ? "" : <Navbar />}

          <main
            className={`bg-white ${
              pathname === "/admin/dashboard" ? "rounded-t-2xl" : ""
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
