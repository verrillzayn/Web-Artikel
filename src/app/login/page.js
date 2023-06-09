import LoginFormCard from "@/components/loginPage/LoginFormCard";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Login",
  desription: "Web Artikel Login",
};

const Login = async () => {
  // const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));
  // await delay(5000);
  // const { data: session } = useSession();
  const session = await getServerSession(authOption);

  return (
    <>
      {session ? (
        <div className="w-full h-[100vh] flex gap-4 justify-center items-center">
          <h1 className="text-[26px] font-semibold py-3">404</h1>

          <p className="border-l border-gray-400 py-3 w-60 pl-6">
            you are logged in
          </p>
        </div>
      ) : (
        <>
          <div className="bg-primaryTheme absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-primaryTheme bottom-0 leading-5 h-min p-5 w-full">
            <div className="relative min-h-0 md:min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl p-10">
              <div className=" flex-col flex self-center lg:pr-14 sm:max-w-4xl xl:max-w-md z-10">
                <div className="self-start hidden lg:flex flex-col  text-gray-300">
                  <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                  <p className="pr-3 text-sm opacity-75">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups
                  </p>
                </div>
              </div>
              <LoginFormCard />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
