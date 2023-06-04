"use client";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useRef } from "react";
import DOMPurify from "isomorphic-dompurify";
import Kommentar from "@/components/artikelPage/Comment";
import Image from "next/image";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";
import { useSession } from "next-auth/react";
import Navbar from "../navbar";

const JosefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });
const JosefinSansBold = Josefin_Sans({ subsets: ["latin"], weight: "600" });

function ArticlePost({ posts, params }) {
  const containerContentRef = useRef(null);
  const { data: session } = useSession();
  const thePost = posts;
  const navbarRef = useParallax({
    speed: 1,
    opacity: [0, 1],
    startScroll: 300,
    endScroll: 500,
    easing: "easeOutQuad",
    translateY: [-100, 0],
    shouldAlwaysCompleteAnimation: true,
    // onProgressChange: () => console.log("mulai"),
    // onEnter: () => console.log("masuk"),
    // onExit: () => console.log("keluar"),
  });

  useEffect(() => {
    const divContainerContent = containerContentRef.current;
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
  }, [params]);

  return (
    <>
      <section className="p-0 relative">
        <ParallaxBanner className="relative aspect-video">
          <ParallaxBannerLayer speed={-30}>
            <Image
              src={thePost?.media.picture}
              alt={thePost?.title || "no alt"}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover"
              sizes="100vw"
              priority
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/50" />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={30} scale={[0.8, 1.2, "easeInQuad"]}>
            <div className="absolute inset-0 h-full flex items-center justify-center text-center lg:pt-0 pt-24">
              <h1
                className={`${JosefinSansBold.className} text-2xl sm:text-3xl p-5 md:p-4 lg:p-2 md:text-4xl lg:text-5xl text-white`}
              >
                {thePost?.title}
              </h1>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </section>

      <div ref={navbarRef.ref} className="sticky top-0">
        <Navbar />
      </div>
      <div className="border-2 border-black w-[320px] h-[50px] lg:w-[728px] lg:h-[90px] m-auto mt-10">
        google ads
      </div>
      <section className="p-4 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center lg:pr-32">
        <article className="py-4 md:py-20 lg:pt-16 lg:pb-6 lg:w-[50vw] md:w-[70vw] w-fit text-[18px] text-gray-800">
          <div
            ref={containerContentRef}
            className="container-artikel"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(thePost?.content),
            }}
          ></div>
          <br />
          <br />
        </article>
      </section>
      <div className="hidden lg:block border-2 border-black lg:w-[970px] lg:h-[250px] m-auto">
        google ads
      </div>
      <aside className=" p-2 md:p-0 lg:p-0 ">
        <Kommentar params={params} session={session} thePost={thePost} />
      </aside>
    </>
  );
}

export default ArticlePost;
