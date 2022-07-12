import Image from "next/image";
import Button from "../Button";

const Header959 = () => {
  return (
    <header className="hidden relative overflow-hidden pb-16 pt-24 md:flex flex-col justify-end">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-20">
        <picture>
          <Image
            src="/static/hero-bg.webp"
            alt="Mulher negra"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-4 px-12 container-lg">
        <div className="bg-gray-100 w-[436px] rounded-3xl">
          <a href="#" className="flex  gap-2 py-2 pl-3 pr-6">
            <div className="flex items-center gap-2">
              <span className="block text-xs text-white font-bold  bg-blue-500 rounded-3xl px-2 py-1">
                C6 EXPERIENCE
              </span>
              <span className="block text-sm text-white">
                O programa de relacionamento do C6 Bank
              </span>
            </div>
          </a>
        </div>

        <div className="container-lg">
          <h1
            className="pb-8 font-extralight leading-tight"
            style={{
              fontSize:
                "calc(36px + (72 - 36) * ((100vw - 600px) / (1920 - 600)))",
            }}
          >
            O banco da vida de{" "}
            <span className="block">16 milhões de pessoas</span>
          </h1>
          <p className="text-2xl font-normal pb-8 opacity-70 w-full max-w-[45%]">
            Conta digital, cartão de crédito, investimentos e mais: tudo em um
            só app.
          </p>
          <div>
            <Button
              href="#"
              css="sm:w-[340px] h-[42px] items-center justify-center text-sm font-semibold"
            >
              <span>NOSSOS PRODUTOS</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header959;
