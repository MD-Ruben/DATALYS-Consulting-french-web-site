import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="font-Title container">
          <div className="mx-auto mb-14 max-w-[460px] text-center">
            <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Nous fournissons les meilleurs services
            </h2>
            <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
              Agréger efficacement les compétences de base de bout en bout sans
              idées durables. Favoriser dynamiquement les solutions tactiques
              sans valeur ajoutée.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
