// @/components/Layout/MenuBarMobile.js
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

const MenuBarMobile = ({ setter }) => {
  return (
    <nav className="lg:hidden z-20 mx-auto  max-w-7xl w-[96%] sm:w-[93%] md:w-[92%] fixed top-0 left-0 right-0 h-[60px] bg-white flex [&>*]:my-auto px-2">
      <button
        className="text-4xl flex text-white"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <HiMenuAlt2 color={`var(--color-primary)`} />
      </button>
      <Link href="/" className="mx-auto">
        {/*eslint-disable-next-line*/}
      </Link>
      <Link className="text-3xl flex text-white" href="/login">
        <FaUser color={`var(--color-primary)`} />
      </Link>
    </nav>
  );
};

export default MenuBarMobile;
