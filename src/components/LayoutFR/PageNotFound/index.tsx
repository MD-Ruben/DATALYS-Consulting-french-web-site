import { Button } from "@nextui-org/button";
import Link from "next/link";
const PageNotFound = () => {
  return (
    <main>
      <div className="mx-auto -mt-10 flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
        <div className="mx-auto max-w-lg space-y-5 text-center">
          <h3 className="font-semibold text-primary">
            Cette page est en maintenance
          </h3>
          <p className="text-4xl font-semibold dark:text-white sm:text-5xl">
            Pas d'informations sur cette page pour le moment.
          </p>
          <p className="text-body-color">
            Sorry, the page you are looking for could not be found.
          </p>
          <div className="flex flex-wrap items-center justify-center">
            {/* <a
              href="/"
              className="block rounded-lg bg-primary px-4 py-2 font-medium text-white duration-150 hover:bg-primary/65 active:bg-primary/60"
            >
              Accueil
            </a> */}
            <Button
              className="flex items-center justify-center rounded-xl border-2 dark:border-body-color-dark"
              as={Link}
              href="/"
            >
              {" "}
              <span className="text-sm !leading-relaxed dark:text-body-color-dark sm:text-base md:text-lg">
                Accueil
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#959CB1"
                  d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PageNotFound;
