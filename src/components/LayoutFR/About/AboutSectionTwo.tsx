import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] rounded-full bg-[#294666] text-center shadow-lg lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/about/8033207-nobg.png"
                alt="about image"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <div className="flex">
                  <span className="mr-4 flex h-14 w-20 items-center rounded-lg bg-[#294666] p-1 text-2xl text-green-600">
                    90%
                  </span>
                  <div>
                    <h3 className="font-Title mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Rapport coût-efficacité
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Établir de manière convaincante des références sur les
                      opportunités supérieures et les technologies
                      fonctionnelles, communiquer de manière crédible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-9">
                <div className="flex">
                  <span className="mr-4 flex h-14 w-20 items-center rounded-lg bg-[#294666] p-1 text-2xl text-red-600">
                    10%
                  </span>
                  <div>
                    <h3 className="font-Title mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Architecture des données
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Reconceptualiser de manière distinctive les partenariats
                      en temps réel avec les marchés d'affaires afin de les
                      rendre plus durables.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-1">
                <div className="flex">
                  <span className="mr-4 flex h-14 w-20 items-center rounded-lg bg-[#294666] p-1 text-2xl text-green-600">
                    60%
                  </span>
                  <div>
                    <h3 className="font-Title mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Architecture des données
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Reconceptualiser de manière distinctive les partenariats
                      en temps réel avec les marchés d'affaires afin de les
                      rendre plus durables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
