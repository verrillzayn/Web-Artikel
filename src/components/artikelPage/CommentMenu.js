import { useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CommentMenu = ({ id, params, setRefetch, setInputdisabled, author }) => {
  const { data: session } = useSession();
  const handleDelete = async (id) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/artikels/comments/${params}/${id}`,
      { method: "DELETE" }
    );
    setRefetch(new Date());
  };

  // console.log(author);

  const handleEdit = () => {
    // setRefetch(new Date());
    // setInputdisabled(false);
  };

  const MenuItem = ({ children }) => {
    return (
      <div
        // typeof="button"
        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-200"
      >
        {children}
      </div>
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild={true}>
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
          <span className="sr-only">Comment settings</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-44">
        {session ? (
          session.user.id === author._id ? (
            <>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Report</MenuItem>
            </>
          ) : (
            <MenuItem>Report</MenuItem>
          )
        ) : (
          <MenuItem>Report</MenuItem>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CommentMenu;
