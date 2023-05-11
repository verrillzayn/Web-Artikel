import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordForm = (props) => {
  return (
    <div className="relative" x-data="{ show: true }">
      <input
        type={props.show ? "text" : "password"}
        placeholder={props.placeholder}
        className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-primaryTheme"
      />
      <div
        onClick={props.toggle}
        className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"
      >
        {props.show ? (
          <FaRegEyeSlash color={`var(--color-primary)`} />
        ) : (
          <FaRegEye color={`var(--color-primary)`} />
        )}
      </div>
    </div>
  );
};

export default PasswordForm;
