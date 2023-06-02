"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useTransition } from "react";
import { revalidateHome } from "@/app/action";

const DashboardTable = ({ posts }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels`;
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = loading || isPending;

  const [slugDelete, setSlugDelete] = useState();
  const [slugEdit, setSlugEdit] = useState();

  const router = useRouter();
  const handleEdit = (slug) => {
    setSlugEdit(slug);
    setEditLoading(true);
    router.push(`/admin/artikels/${slug}`);
  };
  const handleDelete = async (id) => {
    setSlugDelete(id);
    setLoading(true);
    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setLoading(false);
    startTransition(() => {
      revalidateHome();
      console.log({ revalidate: true, onDate: Date.now() });
      router.refresh();
    });
  };
  return (
    <div className="flex flex-col overflow-x-auto max-w-[80vw]">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light ">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    no
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Artikel
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Like
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Comment
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Slug
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((el, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b transition hover:bg-gray-200 cursor-pointer duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {JSON.stringify(el.category, null, 4)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">-</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {JSON.stringify(el.comment, null, 4)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el?.slug}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Button
                          onClick={() => handleEdit(el.slug)}
                          className="font-semibold text-xs bg-blue-500"
                        >
                          {slugEdit === el.slug ? (
                            !editLoading ? (
                              "EDIT"
                            ) : (
                              <Loader2 className="m-1 h-4 w-4 animate-spin" />
                            )
                          ) : (
                            "EDIT"
                          )}
                        </Button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Button
                          className="font-semibold text-xs"
                          onClick={() => handleDelete(el.slug)}
                          variant="destructive"
                        >
                          {slugDelete === el.slug ? (
                            !isMutating ? (
                              "DELETE"
                            ) : (
                              <Loader2 className="m-3 h-4 w-4 animate-spin" />
                            )
                          ) : (
                            "DELETE"
                          )}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
