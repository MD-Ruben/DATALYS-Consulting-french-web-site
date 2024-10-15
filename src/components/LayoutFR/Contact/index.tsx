import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="relative z-10 mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <div className="bottom-30 absolute hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="about-image"
                    className="h-full w-full opacity-5"
                  />
                </div>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Agence de conseil pour votre entreprise
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Faire face à un problème pour obtenir un devis ! <br />
                Contactez-nous
              </p>
              <FormControl isRequired>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <FormLabel
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre nom
                      </FormLabel>
                      <input
                        type="text"
                        placeholder="Entrer votre nom"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre e-mail
                      </label>
                      <input
                        type="email"
                        placeholder="Enter votre adresse e-mail"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Entrer votre message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        disabled
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      disabled
                    >
                      Contactez-nous
                    </button>
                  </div>
                </div>
              </FormControl>
            </div>
          </div>
          <div className="relative mt-4 grid h-[500px] w-full max-w-full grid-cols-2 gap-1 overflow-hidden transition-none">
            <div
              id="embed-map-display"
              className="col-span-2 h-full w-full max-w-full md:col-span-1"
            >
              <iframe
                className="h-full w-full max-w-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Rivera+Faya,+Face+du+Collège+Jules+Vernes&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <div
              id="embed-map-display"
              className="col-span-2 h-full w-full max-w-full md:col-span-1"
            >
              <iframe
                className="h-full w-full max-w-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Almamyah+Rue+028+N°466+COMMUNE+DE+KALOUM&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
