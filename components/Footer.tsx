import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-[#242424] to-black py-16">
      <section className="flex flex-col sm:flex-row px-6 max-w-containerMd mx-auto">
        <div className="flex-[0_0_58%] self-center">
          <span className="uppercase text-base text-white opacity-80 mb-6">
            NOSSO APP
          </span>
          <h2 className="text-[28px] md:text-[40px] text-white font-bold mb-8">
            <span className="font-normal">
              Baixe o app do C6 Bank e abra sua conta
            </span>{" "}
            em poucos minutos
          </h2>

          <Button css="h-[40px] md:w-[262px] uppercase text-sm" href="#">
            ABRA SUA CONTA
          </Button>
        </div>

        <div className="relative overflow-hidden flex-[0_0_41%] max-w-[400px]">
          <figure className="relative overflow-hidden pt-[90%]">
            <div className="absolute w-[80%] top-[30%] left-[20%]">
              <div className="w-full pb-[60%]" />
              <picture>
                <Image
                  src="/static/cartao-carbon-black.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="z-10 absolute top-0"
                />
              </picture>
            </div>

            <div className="absolute w-[140%] top-[8%] left-[-15%]">
              <div className="pb-[80%]" />
              <picture>
                <Image
                  src="/static/phone-app.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="z-[5]"
                />
              </picture>
            </div>
          </figure>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
