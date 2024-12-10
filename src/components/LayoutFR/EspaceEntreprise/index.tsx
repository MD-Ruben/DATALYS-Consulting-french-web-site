"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const EspaceEntreprise = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Formation"
          paragraph="En plus des offres d’Audit et d’Intégration de solutions, l’une des offres que nous portons est la Formation. Dans cette offre nous proposons des formations sur mesure dans nos domaines couverts (Cloud, Infra Système, Energie & Datacenter et Réseau & Sécurité). Nos formations sont proposées à distance et en présentiel selon le type formation et les exigences de mobilités de nos clients."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/audit-title.jpg" alt="audit image" fill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default EspaceEntreprise;
