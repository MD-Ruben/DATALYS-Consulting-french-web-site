"use client";

const AboutAudit = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative z-10 mx-auto mb-14 max-w-[560px]">
          <div className="absolute -bottom-5 hidden w-full px-4 md:block">
            <div className="mx-auto max-w-[700px]">
              <img
                src="/images/logo/logo.png"
                alt="about-image"
                className="h-full w-full opacity-10"
              />
            </div>
          </div>
          <p className="text-justify text-base leading-relaxed text-body-color [word-spacing:-1.7px] md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            dignissimos doloribus, expedita earum quisquam ipsa deserunt fuga
            iusto sint. Itaque eius laudantium inventore dolor est! Placeat
            pariatur quibusdam fugiat quos?
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <img
                  src="/images/audit/audit.jpeg"
                  className="h-full w-full object-cover object-center"
                  alt="audit image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default AboutAudit;
