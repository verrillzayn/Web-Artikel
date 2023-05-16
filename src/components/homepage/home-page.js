"use client";

import HomeMainContent from "@/components/homeMainContent";
import HomeSideContent from "@/components/HomeSideContent";

export default function Home({ data }) {
  return (
    <>
      <section
        className={`flex  flex-col lg:flex-row md:flex-row sm:flex-col justify-center py-10 min-h-screen bg-white gap-4 `}
      >
        <HomeMainContent dataPost={data} />
        <div className="border-l-2 border-gray-400 "></div>
        <HomeSideContent />
      </section>
      <section></section>
    </>
  );
}
