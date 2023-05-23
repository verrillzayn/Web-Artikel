"use client";
import { Josefin_Sans } from "next/font/google";
import { useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";
import Kommentar from "@/components/artikelPage/Comment";
import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useSession } from "next-auth/react";

const JosefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });
const JosefinSansBold = Josefin_Sans({ subsets: ["latin"], weight: "600" });

function ArticlePost({ posts, params }) {
  const { data: session } = useSession();
  const thePost = posts;

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
  }, [params]);

  return (
    <>
      <section className="p-3 md:p-0 lg:p-0">
        <ParallaxBanner className="relative aspect-video">
          <ParallaxBannerLayer speed={-30}>
            <Image
              src={thePost.media.picture}
              alt={thePost.title}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover"
              sizes="100vw"
              priority
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 via-black/50" />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={30} scale={[0.8, 1.2, "easeInQuad"]}>
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <h1
                className={`${JosefinSansBold.className} text-xl sm:text-3xl p-5 md:p-4 lg:p-2 md:text-4xl lg:text-5xl text-white`}
              >
                {thePost.title}
              </h1>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </section>

      <section className="p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center lg:pr-32">
        <article className="py-4 md:py-20 lg:py-16 lg:w-[50vw] md:w-[70vw] w-fit text-[18px] text-gray-800">
          <div
            className="container-artikel"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(thePost?.content),
            }}
          ></div>
          <br />
          <br />
        </article>
      </section>
      <aside className=" p-2 md:p-0 lg:p-0 ">
        <Kommentar params={params} session={session} thePost={thePost} />
      </aside>
    </>
  );
}

export default ArticlePost;
