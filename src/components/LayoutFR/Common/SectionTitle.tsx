const SectionTitle = ({
  title,
  paragraph,
  secondparagraph,
  thirdparagraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  secondparagraph: string;
  thirdparagraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="font-Title mb-4 text-left text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="mb-4 text-left text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="mb-4 text-left text-base !leading-relaxed text-body-color md:text-lg">
          {secondparagraph}
        </p>
        <p className="text-left text-base !leading-relaxed text-body-color md:text-lg">
          {thirdparagraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
