import Image from "next/image";
import CommentMenu from "./CommentMenu";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

const CommentCard = async ({ params }) => {
  const [comments, setComments] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [inputdisabled, setInputdisabled] = useState(true);

  useEffect(() => {
    fetch(`/api/artikels/comments/${params}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comment));
  }, [params, refetch]);
  const dateOpt = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {comments ? (
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
                <CommentMenu
                  id={el._id}
                  author={el.author}
                  params={params}
                  setRefetch={setRefetch}
                  setInputdisabled={setInputdisabled}
                />
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
        })
      ) : (
        <div className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="flex ">
              <Skeleton
                containerClassName="flex-1"
                circle
                width={24}
                height={24}
              />
              <Skeleton
                containerClassName="flex-1"
                width={100}
                className="ml-2 mt-2"
              />
              <Skeleton
                containerClassName="flex-1"
                width={80}
                className="ml-4 mt-2"
              />
            </div>
            <button
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
          </div>
          <Skeleton inline width={"40%"} />
          <Skeleton inline width={"28%"} className="ml-2" />
          <Skeleton inline width={"25%"} className="ml-2" />
          <Skeleton inline width={"50%"} />
          <Skeleton inline width={"28%"} className="ml-2" />
          <Skeleton inline width={"48%"} />
          <Skeleton inline width={"48%"} className="ml-2" />
          <Skeleton inline width={"25%"} />
          <Skeleton inline width={"72%"} className="ml-2" />
          <Skeleton inline width={"33%"} />
          <div className="flex items-center mt-4 space-x-4">
            <button className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
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
        </div>
      )}
    </>
  );
};

export default CommentCard;
