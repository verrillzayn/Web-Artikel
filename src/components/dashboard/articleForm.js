"use client";

import { Button } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Ckeditor = dynamic(() => import("./ckEditor", { ssr: false }));

const ArticleForm = ({ articlePost, header, saveBtn, method, setter }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [content, setContent] = useState(articlePost?.content);
  const setterData = (data) => {
    setContent(data);

    // console.log("argument from Child: ", num);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(content);

    const dataForm = {
      title: event.target.title.value,
      content: content,
      category: [event.target.category.value],
      comment: [],
      summary: event.target.summary.value,
      media: {
        thumbnail: event.target.thumbnail.value,
        picture: event.target.picture.value,
      },
      slug: event.target.slug.value,
      metaTitle: event.target.metaTitle.value,
      metaDescription: event.target.metaDescription.value,
    };

    const jsonData = JSON.stringify(dataForm);

    const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/${
      method === "PATCH" ? articlePost.slug : ""
    }`;

    const options = {
      method: method,
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: jsonData,
    };

    const response = await fetch(url, options);
    const result = await response.json();
    router.refresh(pathname);
  };

  return (
    <div className=" lg:p-4 p-2 md:p-4 rounded-xl bg-white">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {header}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="ID"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ID
                </label>
                <div className="mt-2">
                  <input
                    disabled
                    placeholder="ID"
                    defaultValue={articlePost?._id}
                    type="text"
                    id="ID"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  title
                </label>
                <div className="mt-2">
                  <textarea
                    placeholder="Title"
                    defaultValue={articlePost?.title}
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Category"
                    defaultValue={articlePost?.category}
                    id="category"
                    name="category"
                    type="text"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="summary"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Summary
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Summary"
                    defaultValue={articlePost?.summary}
                    type="text"
                    name="summary"
                    id="summary"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Slug
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Slug"
                    defaultValue={articlePost?.slug}
                    type="text"
                    name="slug"
                    id="slug"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="py-4 md:py-8">
              <h2 className="text-base mb-8 font-semibold leading-7 text-gray-900">
                SEO
              </h2>
              <div className="sm:col-span-2">
                <label
                  htmlFor="metaTitle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Meta Title
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Meta Title"
                    defaultValue={articlePost?.metaTitle}
                    type="text"
                    name="metaTitle"
                    id="metaTitle"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="metaDescription"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Meta description
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Meta Description"
                    type="text"
                    defaultValue={articlePost?.metaDescription}
                    name="metaDescription"
                    id="metaDescription"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="py-4 md:py-8">
              <h2 className="text-base mb-8 font-semibold leading-7 text-gray-900">
                Media
              </h2>
              <div className="sm:col-span-2">
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Thumbnail
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Thumbnail"
                    defaultValue={articlePost?.media?.thumbnail}
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="picture"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Picture
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Picture"
                    type="text"
                    defaultValue={articlePost?.media?.picture}
                    name="picture"
                    id="picture"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {/* {console.log(articlePost.media.picture)} */}
                </div>
              </div>
            </div>
            <p className="mt-8 font-bold text-lg">Content</p>
            <Ckeditor setter={setterData} data={articlePost} />
          </div>
          <div className="flex justify-end">
            {method === "POST" ? (
              <Button onClick={() => setter(false)} color="red">
                Cancel
              </Button>
            ) : (
              ""
            )}
            {saveBtn ? (
              <Button className="mx-4" type="submit">
                save
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
