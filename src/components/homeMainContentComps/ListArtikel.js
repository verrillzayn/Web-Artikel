import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const ListArtikel = ({ dataPost }) => {
  const [selectedCategory, setSelectedCategory] = useState([dataPost]);

  const kategori = dataPost.map((e) => {
    return e.category[0];
  });

  const category = ["all", ...new Set(kategori)];

  const handleTabClick = (categorie) => {
    categorie === "all"
      ? setSelectedCategory([dataPost])
      : setSelectedCategory([dataPost.filter((e) => e.category == categorie)]);
  };

  return (
    <div className=" mt-14 w-full">
      <h1 className="text-2xl font-semibold tracking-tight pl-4">Artikels</h1>

      <div className="w-full px-0 md:px-2 py-4 ">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl p-1">
            {category.map((category, index) => (
              <Tab
                onClick={() => handleTabClick(category)}
                key={index}
                className={({ selected }) =>
                  classNames(
                    "px-3 rounded-full py-1 text-[10px] font-semibold leading-5",
                    selected
                      ? `bg-primaryTheme text-white shadow focus:outline-none `
                      : "text-gray-600 hover:bg-black/[0.2] ring-1 ring-gray-400 hover:text-black "
                  )
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(category).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white sm:p-3 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {selectedCategory[0].map((post) => (
                    <li
                      key={post._id}
                      className="shadow-md lg:shadow-none relative pb-3 mt-4 flex gap-4 flex-row rounded-md sm:p-3 hover:bg-gray-100"
                    >
                      <div className="relative aspect-video w-1/3">
                        <Image
                          className="lg:rounded-lg rounded-t-lg w-full lg:w-[50%]"
                          src={post.media.thumbnail}
                          fill
                          alt="asd"
                        />
                      </div>

                      <div className="px-2 w-[63%]">
                        <span
                          className={`hidden lg:inline border bg-gray-400  rounded-full text-[10px] px-1 py-[2px] font-semibold`}
                        >
                          {post.category}
                        </span>

                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <span
                          className={`lg:hidden inline border bg-gray-400  rounded-full text-[10px] px-2 py-[4px] font-semibold`}
                        >
                          {post.category}
                        </span>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </div>

                      <Link
                        href={`/article/${post.slug}`}
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "focus:z-10 focus:outline-none"
                        )}
                        aria-label={post.title}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default ListArtikel;
