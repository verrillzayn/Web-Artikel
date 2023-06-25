"use client";

import * as React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { revalidateHome } from "@/app/action";
import { useToast } from "../ui/use-toast";

const Ckeditor = dynamic(() => import("./ckEditor", { ssr: false }));

const ArticleForm = ({ articlePost, header, saveBtn, method, setter }) => {
  const router = useRouter();
  const formRef = useRef(null);
  const { toast } = useToast();

  const [content, setContent] = useState(articlePost?.content);
  const [loading, setLoading] = useState(false);
  let [isPending, startTransition] = useTransition();
  const isMutating = loading || isPending;
  const setterData = (data) => {
    setContent(data);
  };

  const handleClickPost = async () => {
    setLoading(true);
    const dataForm = {
      title: formRef.current?.title.value,
      content: content,
      category: [formRef.current?.category.value],
      comment: [],
      summary: formRef.current?.summary.value,
      media: {
        thumbnail: formRef.current?.thumbnail.value,
        picture: formRef.current?.picture.value,
      },
      slug: formRef.current?.slug.value,
      metaTitle: formRef.current?.metaTitle.value,
      metaDescription: formRef.current?.metaDescription.value,
    };
    const jsonData = JSON.stringify(dataForm);
    const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    const response = await fetch(url, options);
    const getResponse = await response.json();
    setLoading(false);
    startTransition(() => {
      revalidateHome();
      console.log({ revalidate: true, onDate: Date.now() });
      if (setter) {
        setter(false);
      }
      router.refresh();
    });
    toast({
      variant: getResponse.updatedArtikel.acknowledged
        ? "succes"
        : "destructive",
      title: getResponse.updatedArtikel.acknowledged
        ? "Succes"
        : "Uh oh! Something went wrong. ",
      description: getResponse.updatedArtikel.acknowledged
        ? "Artikel Updated!.."
        : "There was a problem with your request.",
    });
  };

  const handleClickPatch = async () => {
    setLoading(true);
    const dataForm = {
      title: formRef.current?.title.value,
      content: content,
      category: [formRef.current?.category.value],
      comment: [],
      summary: formRef.current?.summary.value,
      media: {
        thumbnail: formRef.current?.thumbnail.value,
        picture: formRef.current?.picture.value,
      },
      slug: formRef.current?.slug.value,
      metaTitle: formRef.current?.metaTitle.value,
      metaDescription: formRef.current?.metaDescription.value,
    };
    const jsonData = JSON.stringify(dataForm);
    const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/${articlePost.slug}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
    const response = await fetch(url, options);
    const getResponse = await response.json();
    setLoading(false);
    startTransition(() => {
      revalidateHome();
      console.log(getResponse);
      console.log({ revalidate: true, onDate: Date.now() });
      router.refresh();

      toast({
        variant: getResponse.updatedArtikel.acknowledged
          ? "succes"
          : "destructive",
        title: getResponse.updatedArtikel.acknowledged
          ? "Succes"
          : "Uh oh! Something went wrong. ",
        description: getResponse.updatedArtikel.acknowledged
          ? "Artikel Updated!.."
          : "There was a problem with your request.",
      });
    });
  };

  const sub = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" lg:p-4 p-2 md:p-4 rounded-xl bg-white">
      <form ref={formRef} onSubmit={sub}>
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
                </div>
              </div>
            </div>
            <p className="mt-8 font-bold text-lg">Content</p>
            <Ckeditor setter={setterData} data={articlePost} />
          </div>
          <div className="flex justify-end">
            {method === "POST" ? (
              <>
                <Button variant="destructive" onClick={() => setter(false)}>
                  Cancel
                </Button>
                <Button
                  className="mx-4 font-semibold bg-primaryTheme"
                  onClick={handleClickPost}
                  // type="submit"
                >
                  {!isMutating ? (
                    "SAVE"
                  ) : (
                    <Loader2 className="m-3 h-4 w-4 animate-spin" />
                  )}
                </Button>
              </>
            ) : (
              ""
            )}
            {method === "PATCH" && (
              <Button
                className="mx-4 font-semibold bg-primaryTheme"
                onClick={handleClickPatch}
                // type="submit"
              >
                {!isMutating ? (
                  "SAVE"
                ) : (
                  <Loader2 className="m-3 h-4 w-4 animate-spin" />
                )}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
