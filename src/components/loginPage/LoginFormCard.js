import TextForm from "./TextForm";
import PasswordForm from "./PasswordForm";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn as googleSignIn } from "next-auth/react";

const LoginFormCard = () => {
  const [signIn, setSignIn] = useState(true);
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  const handleGoogleSignIn = async () => {
    googleSignIn("google", { callbackUrl: "http://localhost:3000" });
    // console.log(asd);
  };

  return (
    <div className="flex justify-center self-center z-10">
      <div className="mt-14 p-12  bg-white mx-auto rounded-3xl w-96 ">
        <div className="mb-7">
          <h3 className="font-semibold text-2xl text-gray-800">
            {signIn ? "Sign In" : "Register"}
          </h3>
          <p className="text-gray-400">
            {signIn ? "Dont have an account" : "Already have an account"}?{" "}
            <button
              onClick={() => setSignIn(!signIn)}
              className="text-sm text-primaryTheme hover:text-[var(--color-primarydua)]"
            >
              {signIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
        <div className="space-y-6">
          {signIn ? (
            <>
              <TextForm type="email" placeholder="Email" />
              <PasswordForm
                placeholder="Password"
                toggle={toggle}
                show={show}
              />
            </>
          ) : (
            <>
              <div className="flex gap-1">
                <TextForm type="text" placeholder="First Name" />
                <TextForm type="text" placeholder="Last Name" />
              </div>

              <TextForm type="email" placeholder="Email" />
              <PasswordForm
                placeholder="Password"
                toggle={toggle}
                show={show}
              />
              <PasswordForm
                placeholder="Confirm Password"
                toggle={toggle}
                show={show}
              />
            </>
          )}

          <div className="flex items-center justify-between">
            <div className="text-sm ml-auto">
              <Link
                href="#"
                className={`text-primaryTheme hover:text-[var(--color-primarydua)] ${
                  signIn ? "" : "hidden"
                }`}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-primaryTheme hover:bg-[var(--color-primarydua)] text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2 my-5">
            <span className="h-px w-16 bg-gray-300"></span>
            <span className="text-gray-400 font-normal">or</span>
            <span className="h-px w-16 bg-gray-300"></span>
          </div>
          <div className="flex justify-center gap-5 w-full ">
            {/* <button
              type="submit"
              className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
            >
              <span>Google</span>
            </button> */}

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center mb-6 md:mb-0 border gap-3  border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-"
            >
              <FcGoogle size={"2em"} />
              <span className="border-l border-gray-600 h-6 w-1 block"></span>
              <span>Sign in with google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormCard;
