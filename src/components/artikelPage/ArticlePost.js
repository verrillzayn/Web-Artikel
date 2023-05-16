"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Head from "next/head";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import Kommentar from "@/components/artikelPage/Comment";
import Image from "next/image";

const JosefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });
const JosefinSansBold = Josefin_Sans({ subsets: ["latin"], weight: "600" });

function ArticlePost({ posts, params }) {
  const [offset, setOffset] = useState(0);
  const slug = params;

  const thePost = posts.artikel;

  useEffect(() => {
    const divContainerContent = document.querySelector(".container-artikel");
    const asArray = Object.entries(divContainerContent.childNodes);

    divContainerContent.classList.add(`${JosefinSans.className}`);
    if (divContainerContent.childNodes) {
      const h1 = asArray.filter((e) => e[1].nodeName == "H1");
      const h2 = asArray.filter((e) => e[1].nodeName == "H2");
      const h3 = asArray.filter((e) => e[1].nodeName == "H3");
      h1.forEach((e) => {
        e[1].classList.add(`${JosefinSansBold.className}`);
      });
      h2.forEach((e) => {
        e[1].classList.add(`${JosefinSansBold.className}`);
      });
      h3.forEach((e) => {
        e[1].classList.add(`${JosefinSansBold.className}`);
      });
    }

    //
    //
    const onScroll = () =>
      setOffset(
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="p-3 md:p-0 lg:p-0">
        <div className=" w-full h-[50vh] lg:h-[80vh] overflow-hidden">
          <div
            style={{
              animationDelay: `calc(${offset} * -1s)`,
              backgroundImage: `url('${thePost.media.picture}')`,
            }}
            className={` h-full bg-cover bg-fixed bg-center parallaxBg rounded-lg md:rounded-none lg:rounded-none `}
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            <div
              style={{ animationDelay: `calc(${offset} * -1s)` }}
              className="lg:w-fit max-w-full lg:max-w-[60vw]  px-5 lg:px-2 text-center parallax sticky mx-auto top-[25%] md:top-[45%] lg:top-[50%] "
            >
              <h1
                className={`${JosefinSansBold.className} text-xl sm:text-3xl p-5 md:p-4 lg:p-2 md:text-4xl lg:text-4xl text-white`}
              >
                {thePost.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center lg:pr-32">
        <article className="py-4 px-0 md:py-20 lg:py-16 lg:w-[50vw] md:w-[70vw] w-fit text-[18px] text-gray-800">
          <div
            className="container-artikel"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(thePost.content),
            }}
          ></div>
          <br />
          <br />
        </article>
      </section>
      <aside className=" p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center">
        <Kommentar />
      </aside>
    </>
  );
}

export default ArticlePost;
