import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";

const CommentMenu = () => {
  return (
    <Menu>
      <MenuHandler>
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
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <Link href="#">Edit</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Remove</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Report</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CommentMenu;
