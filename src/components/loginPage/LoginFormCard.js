"use client";

import TextForm from "./TextForm";
import PasswordForm from "./PasswordForm";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { registerValidate, loginValidate } from "lib/formik/validate";
import { TiWarningOutline } from "react-icons/ti";
import { FcCheckmark } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Spinner } from "@material-tailwind/react";

const LoginFormCard = () => {
  const router = useRouter();
  const [registerErrorMsg, setRegisterErrorMsg] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState(false);
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const toggle = () => setShow(!show);
  const onfocus = () => {
    setLoginErrorMsg("");
    setRegisterErrorMsg("");
  };

  // Google Login
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl: "/" });
  };

  // handler submit register
  const handleSubmitRegister = async (values) => {
    setLoading(true);
    const url = `/api/auth/userRegister`;
    const userRole =
      values?.email === "verzynx@gmail.com" ? "superAdmin" : "client";
    const data = {
      userName: values?.firstName + values?.lastName,
      firstName: values?.firstName,
      lastName: values.lastName,
      pictureProfile: "",
      email: values?.email,
      hashedPassword: values?.password,
      role: userRole,
      signInWith: "EmailCredential",
    };
    const option = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const response = await fetch(url, option);
    const result = await response.json();
    // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));

    // await delay(5000);
    setLoading(false);
    if (result.message) {
      setRegisterErrorMsg(result.message);
    }
  };

  // handler submit login
  async function handleSubmitLogin(values) {
    setLoading(true);
    const status = await signIn("credentials", {
      redirect: false,
      email: values?.email,
      password: values?.password,
      callbackUrl: "/",
    });
    setLoading(false);

    if (status.error) {
      setLoginErrorMsg(status.error);
    } else {
      router.push("/");
    }

    console.log(status);
  }

  //formik submit handler
  async function formikOnSubmit(values) {
    login ? await handleSubmitLogin(values) : handleSubmitRegister(values);
  }

  // formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: login ? loginValidate : registerValidate,
    onSubmit: formikOnSubmit,
  });

  return (
    <div className="flex justify-center self-center z-10">
      <div className="mt-14 p-12  bg-white mx-auto rounded-3xl w-96 ">
        <div className="mb-7">
          <h3 className="font-semibold text-2xl text-gray-800">
            {login ? "Sign In" : "Register"}
          </h3>
          <p className="text-gray-400">
            {login ? "Dont have an account" : "Already have an account"}?{" "}
            <button
              onClick={() => {
                setLogin(!login);
                setRegisterErrorMsg("");
                setLoginErrorMsg("");
              }}
              className="text-sm text-primaryTheme hover:text-[var(--color-primarydua)]"
            >
              {login ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
        <div className="space-y-6">
          {login ? (
            <>
              <form
                onSubmit={formik.handleSubmit}
                id="first"
                className="space-y-6"
              >
                <TextForm
                  className={`w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-primaryTheme ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-400 focus:border-red-400"
                      : ""
                  } `}
                  type="email"
                  onfocus={onfocus}
                  placeholder="Email"
                  name="Email"
                  formik={{ ...formik.getFieldProps("email") }}
                  icon={
                    formik.touched.email ? (
                      formik.errors.email ? (
                        <TiWarningOutline color="red" size={"1.2em"} />
                      ) : (
                        <FcCheckmark color="green" size={"1.2em"} />
                      )
                    ) : (
                      ""
                    )
                  }
                />
                <PasswordForm
                  onfocus={onfocus}
                  className={`text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-primaryTheme ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-400 focus:border-red-400"
                      : ""
                  }`}
                  name="Password"
                  placeholder="Password"
                  toggle={toggle}
                  show={show}
                  formik={{ ...formik.getFieldProps("password") }}
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className="text-[12px] text-red-400 pl-2">
                    {formik.errors.password}
                  </span>
                ) : (
                  ""
                )}
              </form>
            </>
          ) : (
            <>
              <form
                id="first"
                className="space-y-3"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex gap-1">
                  <TextForm
                    onfocus={onfocus}
                    type="text"
                    className={`w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-primaryTheme ${
                      formik.errors.firsName && formik.touched.firstName
                        ? "border-red-400 focus:border-red-400"
                        : ""
                    } `}
                    name="FirstName"
                    placeholder="First Name"
                    formik={{ ...formik.getFieldProps("firstName") }}
                  />
                  <TextForm
                    onfocus={onfocus}
                    type="text"
                    name="LastName"
                    className={`w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-primaryTheme ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-400 focus:border-red-400"
                        : ""
                    } `}
                    placeholder="Last Name"
                    formik={{ ...formik.getFieldProps("lastName") }}
                  />
                </div>
                <TextForm
                  onfocus={onfocus}
                  type="email"
                  placeholder="Email"
                  name="Email"
                  className={`w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-primaryTheme ${
                    formik.errors.emailRegister && formik.touched.email
                      ? "border-red-400 focus:border-red-400"
                      : ""
                  } `}
                  formik={{ ...formik.getFieldProps("email") }}
                  icon={
                    formik.touched.email ? (
                      formik.errors.emailRegister ? (
                        <TiWarningOutline color="red" size={"1.2em"} />
                      ) : (
                        <FcCheckmark color="green" size={"1.2em"} />
                      )
                    ) : (
                      ""
                    )
                  }
                />
                <PasswordForm
                  onfocus={onfocus}
                  name="Password"
                  className={`text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-primaryTheme ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-400 focus:border-red-400"
                      : ""
                  }`}
                  placeholder="Password"
                  toggle={toggle}
                  show={show}
                  formik={{ ...formik.getFieldProps("password") }}
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className="text-[12px] text-red-400 pl-2">
                    {formik.errors.password}
                  </span>
                ) : (
                  ""
                )}
                <PasswordForm
                  name="ConfirmPasword"
                  onfocus={onfocus}
                  className={`text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-primaryTheme ${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "border-red-400 focus:border-red-400"
                      : ""
                  }`}
                  placeholder="Confirm Password"
                  toggle={toggle}
                  show={show}
                  formik={{ ...formik.getFieldProps("confirmPassword") }}
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <span className="text-[12px] text-red-400 pl-2">
                    {formik.errors.confirmPassword}
                  </span>
                ) : (
                  ""
                )}
              </form>
            </>
          )}

          <div className="flex items-center justify-between">
            {registerErrorMsg ? (
              <span className="flex justify-center text-[0.9em]  w-full">
                <p className="text-red-400">{registerErrorMsg}</p>
              </span>
            ) : (
              ""
            )}

            <div className="text-sm ml-auto">
              <Link
                href="#"
                className={`text-primaryTheme hover:text-[var(--color-primarydua)] ${
                  login ? "" : "hidden"
                }`}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          {loginErrorMsg ? (
            <span className="flex justify-center text-[0.9em]  w-full">
              <p className="text-red-400">{loginErrorMsg}</p>
            </span>
          ) : (
            ""
          )}
          <div>
            <button
              type="submit"
              form="first"
              className="w-full flex justify-center bg-primaryTheme hover:bg-[var(--color-primarydua)] text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-10"
            >
              {loading ? (
                <Spinner color="indigo" />
              ) : login ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
              {}
            </button>
          </div>
          {login ? (
            <>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-300"></span>
                <span className="text-gray-400 font-normal">or</span>
                <span className="h-px w-16 bg-gray-300"></span>
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border gap-3  border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-10 px-"
                >
                  {googleLoading ? (
                    <Spinner color="indigo" />
                  ) : (
                    <>
                      <FcGoogle size={"2em"} />
                      <span className="border-l border-gray-600 h-6 w-1 block"></span>
                      <span>Sign in with google</span>
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginFormCard;
