import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordForm = (props) => {
  return (
    <div className="relative" x-data="{ show: true }">
      <input
        onFocus={props.onfocus}
        type={props.show ? "text" : "password"}
        placeholder={props.placeholder}
        required
        name={props.name}
        {...props.formik}
        className={props.className}
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
