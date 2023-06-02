import { Suspense, useState } from "react";
import CommentCard from "./CommentCard";
import { useRouter, usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import LoginFormCard from "../loginPage/LoginFormCard";

const Loading = () => {
  return (
    <div className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex ">
          <Skeleton containerClassName="flex-1" circle width={24} height={24} />
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
  );
};

const Kommentar = ({ params, session, thePost }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [trigger, setTrigger] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentContent = {
        author: session.user.id,
        artikel: thePost._id,
        content: e.target.comment.value,
      };
      const jsonData = JSON.stringify(commentContent);
      const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/comments`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      };
      const response = await fetch(url, options);
      const result = await response.json();
      e.target.comment.value = "";
      setTrigger((trigger) => trigger + 1);
      router.refresh(pathname);
    } catch (error) {
      // handleOpen();
      console.log(error);
    }
  };

  return (
    <section className="bg-white flex justify-center p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center lg:pr-32">
      <div className="py-4 md:py-20 lg:py-16 lg:w-[50vw] md:w-[70vw] w-full text-[18px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
            Discussion (20)
          </h2>
        </div>

        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-400 focus-within:border-primaryTheme focus-within:border-2">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              name="comment"
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>

          {session && (
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primaryTheme rounded-lg hover:bg-indigo-900 hover:shadow-xl"
            >
              Post comment
            </button>
          )}
        </form>
        {!session && (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primaryTheme rounded-lg hover:bg-indigo-900 hover:shadow-xl"
              >
                Post comment
              </button>
            </DialogTrigger>
            <DialogContent
              className={`min-w-[95vw] sm:min-w-[60vw] lg:min-w-[40vw]`}
            >
              <DialogHeader>
                <LoginFormCard />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
        <Suspense fallback={<Loading />}>
          <CommentCard params={params} trigger={trigger} />
        </Suspense>
      </div>
    </section>
  );
};

export default Kommentar;
