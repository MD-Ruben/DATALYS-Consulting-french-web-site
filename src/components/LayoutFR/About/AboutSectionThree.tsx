import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionThree = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] rounded-full bg-[#294666] shadow-lg">
                <img
                  src="/images/about/8033207-nobg.png"
                  alt="about-image"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="relative z-10 w-full px-4 text-start lg:mr-0 lg:w-1/2">
              <div className="absolute bottom-20 hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="about-image"
                    className="h-full w-full opacity-10"
                  />
                </div>
              </div>
              <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                A propos de nous
              </h2>
              <p className="text-justify text-base leading-relaxed text-body-color [word-spacing:-1.6px] md:text-lg">
                Fondé en 2023, par des Consultants engagés et passionnés de la
                Digitalisation, Datalys Consulting est une Entreprise de Service
                IT qui apporte une expertise réinventée. Nous sommes
                spécialisées dans le Cloud, l’Infrastructure IT et les Réseaux &
                Sécurité : Les sujets clés impactant le monde de l’IT et de la
                Digitalisation.
              </p>
              <p className="mt-2 text-justify text-base leading-relaxed text-body-color [word-spacing:-1.6px] md:text-lg">
                La transformation, la gestion d'infrastructures IT & cloud,
                l'optimisation énergétique des Data Centers ainsi que le
                déploiement efficace des systèmes de Réseau et Sécurité
                informatique font partie de nos compétences de pointe. Chez
                DATALYS, notre engagement est d'offrir des solutions innovantes
                qui propulsent votre entreprise vers l'avenir numérique et dans
                l’atteinte de vos objectifs stratégiques.
              </p>
              <p className="mt-2 text-justify text-base leading-relaxed text-body-color [word-spacing:-1.6px] md:text-lg">
                Chez DATALYS, l'innovation est au coeur de notre ADN. Nous
                proposons à nos clients des solutions de nouvelles générations
                ainsi que des bonnes pratiques pour leur fournir un avantage
                concurrentiel dans un monde en constante évolution.
              </p>
              {/* <SectionTitle
                title="A propos de nous"
                paragraph="Fondé en 2023, par des Consultants engagés et passionnés de la Digitalisation, Datalys
                Consulting est une Entreprise de Service IT qui apporte une expertise réinventée. Nous sommes spécialisées dans le Cloud, l’Infrastructure IT et les Réseaux & Sécurité : Les sujets clés impactant le monde de l’IT et de la Digitalisation."
                mb="24px"
                secondparagraph="La transformation, la gestion d'infrastructures IT & cloud, l'optimisation énergétique des Data Centers ainsi que le déploiement efficace des systèmes de Réseau et Sécurité informatique font partie de nos compétences de pointe. Chez DATALYS, notre engagement est d'offrir des solutions innovantes qui propulsent votre entreprise vers l'avenir numérique et dans l’atteinte de vos objectifs stratégiques."
                thirdparagraph="Chez DATALYS, l'innovation est au coeur de notre ADN. Nous proposons à nos clients des solutions de nouvelles générations ainsi que des bonnes pratiques pour leur fournir un avantage concurrentiel dans un monde en constante évolution."
              /> */}
              <div className="mt-4 flex items-center space-y-4 sm:space-y-0">
                <Button
                  className="flex items-center justify-center rounded-xl border-2 dark:border-body-color-dark"
                  as={Link}
                  href="/apropos"
                >
                  {" "}
                  <span className="text-sm !leading-relaxed dark:text-body-color-dark sm:text-base md:text-lg">
                    Voir plus
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
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
