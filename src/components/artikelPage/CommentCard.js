import Image from "next/image";
import CommentMenu from "./CommentMenu";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const CommentCard = async ({ slug, trigger }) => {
  const [comments, setComments] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [inputdisabled, setInputdisabled] = useState(true);
  const params = slug;

  useEffect(() => {
    fetch(`/api/artikels/comments/${params}`)
      .then((res) => res.json())
      .then((data) => {
        const strComment = JSON.stringify(data);
        const parse = JSON.parse(strComment);
        // console.log(parse);
        setComments(parse.comment);
      });
  }, [params, refetch, trigger]);
  const dateOpt = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {comments &&
        Object.values(comments).map((el) => {
          return (
            <article
              key={el._id}
              className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 shadow-lg"
            >
              <aside className="flex justify-between items-center mb-2 ">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    {el.author?.pictureProfile ? (
                      <Image
                        width={100}
                        height={100}
                        className="mr-2 w-6 h-6 rounded-full"
                        src={el.author.pictureProfile}
                        alt="picture profile"
                      />
                    ) : (
                      <span
                        style={{
                          backgroundColor:
                            "#" +
                            Math.floor(Math.random() * 16777215).toString(16),
                        }}
                        className={`rounded-full mr-2 w-6 h-6 pt-[1px] pl-[1px] text-center`}
                      >
                        {el.author.userName.charAt(0).toUpperCase()}
                      </span>
                    )}
                    {el.author.userName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(el.createdAt).toLocaleDateString(
                      "id-ID",
                      dateOpt
                    )}
                  </p>
                </div>
                <Suspense fallback={<Skeleton />}>
                  <CommentMenu
                    id={el._id}
                    author={el.author}
                    params={params}
                    setRefetch={setRefetch}
                    setInputdisabled={setInputdisabled}
                  />
                </Suspense>
              </aside>
              {/* <p className="text-gray-500 dark:text-gray-400">{el.content}</p> */}
              <form>
                <input
                  className="bg-white block text-gray-500 w-[95%] px-2 focus-visible:border-red-500"
                  defaultValue={el.content}
                  disabled={inputdisabled}
                ></input>
                {!inputdisabled ? (
                  <div className="flex w-[25%] justify-between mt-1 ">
                    <button
                      className="text-white text-sm py-2 px-3 rounded-lg bg-indigo-600"
                      onClick={() => setInputdisabled(true)}
                    >
                      Ok
                    </button>
                    <button
                      className="text-white text-sm py-2 px-3 rounded-lg bg-red-400"
                      onClick={() => setInputdisabled(true)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </form>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    aria-hidden="true"
                    className="mr-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default CommentCard;
