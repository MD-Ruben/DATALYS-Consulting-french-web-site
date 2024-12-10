import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Connexion = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div
            className="mx-auto max-w-[770px] rounded-md"
            data-wow-delay=".15s"
          >
            <main className="flex h-full w-full flex-col items-center justify-center sm:px-4">
              <div className="space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                  <Image
                    src="/images/logo/logo.png"
                    width={150}
                    height={80}
                    alt=""
                    className="mx-auto"
                  />
                  <div className="mt-5 space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                      Create an account
                    </h3>
                    <p className="">
                      Already have an account?{" "}
                      <a
                        href="javascript:void(0)"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Log in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-white/25 p-4 py-6 shadow-2xl backdrop-blur-xl sm:rounded-lg sm:p-6">
                  <form className="space-y-5">
                    <div>
                      <label className="font-medium text-white">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        required
                        className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-200 shadow-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-white">
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        required
                        className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-200 shadow-sm outline-none focus:border-primary"
                      />
                    </div>
                    <button className="w-full rounded-full bg-white px-4 py-2 font-medium text-primary duration-150 hover:bg-white active:bg-primary">
                      Connexion
                    </button>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div> */}
    </section>
  );
};

export default Connexion;
