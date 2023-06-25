"use client";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";
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
import { Heart, MessageCircle, Bookmark, Clock4, Forward } from "lucide-react";

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
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const divContainerContent = containerContentRef.current;
    const asArray = Object.entries(divContainerContent.childNodes);

    fetch(`/api/artikels/comments/${params}`)
      .then((res) => res.json())
      .then((data) => {
        const strComment = JSON.stringify(data);
        const parse = JSON.parse(strComment);
        setComments(parse.comment);
      });

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

      <div ref={navbarRef.ref} className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="border-2 border-black w-[320px] h-[50px] lg:w-[728px] lg:h-[90px] m-auto mt-10">
        google ads
      </div>

      <section className="p-4 md:p-0 lg:p-0 lg:mb-20 md:flex md:justify-center lg:flex lg:justify-start lg:pr-32">
        <aside className="hidden md:block lg:w-[17%] py-4 md:py-20 lg:pt-16 lg:pb-6">
          <nav className="sticky top-40">
            <ul className="flex flex-col gap-6">
              <li className="w-1/2 m-auto flex flex-col gap-2">
                <Clock4 className="h-5 w-5 m-auto" />
                <span className="text-gray-700 m-auto">5 min</span>
              </li>
              <li className="w-1/2 m-auto flex flex-col gap-2">
                <Heart className="h-5 w-5 m-auto" />
                <span className="text-gray-700 m-auto">6</span>
              </li>
              <li className="w-1/2 m-auto flex flex-col gap-2">
                <MessageCircle className="h-5 w-5 m-auto" />
                <span className="text-gray-700 m-auto">{comments.length}</span>
              </li>
              <li className="w-1/2 m-auto">
                <Bookmark className="h-5 w-5 m-auto" />
              </li>
              <li className="w-1/2 m-auto mt-4">
                <Forward className=" h-5 w-5 m-auto" />
              </li>
            </ul>
          </nav>
        </aside>
        <article className="py-4 md:py-20 lg:py-0 w-fit text-[18px] text-gray-800">
          <div
            ref={containerContentRef}
            className="container-artikel lg:mt-16 lg:w-[50vw] md:w-[70vw]"
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
