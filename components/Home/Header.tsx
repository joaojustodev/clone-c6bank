import Image from "next/image";
import Button from "../UI/Button";
import HeroXsImg from "../../public/static/hero-bg-xs.webp";

const Header = () => {
  return (
    <header className="md:hidden flex flex-col">
      <div className="overflow-hidden">
        <div className="relative z-[150] w-[150%] right-5  top-[-1%] sm:w-full sm:right-0 sm:top0">
          <div>
            <div className="w-full pb-[75%]"></div>
            <picture>
              <Image
                src={HeroXsImg}
                alt="Mulher negra"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                quality={100}
                className="absolute left-0 top-0"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8 px-6">
        <div className="flex flex-col bg-gray-100 rounded sm:rounded-3xl sm:mx-auto">
          <a href="#" className="flex gap-2 px-2 py-3 sm:pl-3 sm:pr-6">
            <hr className="h-[inherit] w-1 rounded bg-blue-500 sm:hidden"></hr>
            <div className="sm:flex sm:items-center sm:gap-2">
              <span className="block text-xs text-white sm:bg-blue-500 sm:font-bold sm:rounded sm:px-2 sm:py-[1px]">
                C6 EXPERIENCE
              </span>
              <span className="block text-sm text-white">
                O programa de relacionamento do C6 Bank
              </span>
            </div>
          </a>
        </div>

        <h1 className="text-3xl font-bold leading-[1.25] sm:text-center">
          O banco da vida de 16 milhões de pessoas
        </h1>
        <p className="text-lg w-full sm:text-center">
          Conta digital, cartão de crédito, investimentos e mais: tudo em um só
          app.
        </p>
        <div>
          <Button
            href="#"
            css="w-full sm:w-[370px] h-[40px] items-center justify-center text-sm sm:mx-auto"
          >
            <span>NOSSOS PRODUTOS</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
