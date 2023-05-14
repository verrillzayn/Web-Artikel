import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const TextForm = (props) => {
  return (
    <div className="relative" x-data="{ show: true }">
      <input
        onFocus={props.onfocus}
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        {...props.formik}
        required
      />
      <div
        onClick={props.toggle}
        className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"
      >
        {props.icon}
      </div>
    </div>
  );
};

export default TextForm;
