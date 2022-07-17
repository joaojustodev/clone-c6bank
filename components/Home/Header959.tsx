import Image from "next/image";
import Button from "../UI/Button";
import HeroImg from "../../public/static/hero-bg.webp";

const Header959 = () => {
  return (
    <header className="hidden relative pt-24 pb-16 overflow-hidden md:flex flex-col justify-end h-full min-h-screen">
      <div className="w-full h-full">
        <div className="absolute -z-20 top-0 right-0 bottom-0 left-0 ">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full pb-[50%]" />
            <picture>
              <Image
                src={HeroImg}
                alt="Mulher negra"
                layout="fill"
                objectFit="cover"
                objectPosition="70% 0"
                quality={100}
                placeholder="blur"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-12 w-full max-w-containerLg mx-auto">
        <div className="bg-gray-100 w-full max-w-[436px] rounded-3xl">
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
