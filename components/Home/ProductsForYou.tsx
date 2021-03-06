import Image from "next/image";
import { motion, Variants } from "framer-motion";
import TechInvestImg from "../../public/static/techinvest-xs.webp";
import SpiceCardImg from "../../public/static/spice.webp";
import AcqueCardImg from "../../public/static/acqua.webp";
import BlueCardImg from "../../public/static/blue.webp";
import BorealForestCardImg from "../../public/static/boreal-forest.webp";
import BubblegumCardImg from "../../public/static/bubblegum.webp";
import ChampagneCardImg from "../../public/static/champagne.webp";
import GoldCardImg from "../../public/static/gold.webp";
import PinkCardImg from "../../public/static/pink.webp";
import RainbowCardImg from "../../public/static/rainbow.webp";
import RedCardImg from "../../public/static/red.webp";
import SilverCardImg from "../../public/static/silver.webp";
import SunsetCardImg from "../../public/static/sunset.webp";
import CarbonCardImg from "../../public/static/carbon-card.png";
import CarbonCardAppImg from "../../public/static/carbon-card-app.png";
import C6InvestientoImg from "../../public/static/c6investimento-box-app.png";
import AtomosBoxAppImg from "../../public/static/atomos-box-app.png";
import C6TagBoxAppImg from "../../public/static/c6tag-box-bg.png";
import CartoesContaGlobalImg from "../../public/static/cartoes-conta-global.webp";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const spanHoverVariant: Variants = {
  hover: {
    top: -5,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const undelineHoverVariant: Variants = {
  hover: {
    width: "100%",
    opacity: 1,
    transition: {
      ease: "linear",

      duration: 0.1,
    },
  },
};

const imageScaleVariant: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      default: { duration: 0.2 },
    },
  },
};

const imageScaleVariant2: Variants = {
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const imageUpVariant: Variants = {
  hover: {
    y: -5,
  },
};

const imageDownVariant: Variants = {
  hover: {
    y: 5,
  },
};

function cardVariantsMoveX(x: number): Variants {
  const variant: Variants = {
    hover: {
      x: x,
    },
  };

  return variant;
}

const ProductsForYou = () => {
  const isSmall = useMediaQuery("(min-width: 599.95px)");

  return (
    <div className="px-4 grid md:grid-cols-12 gap-2 max-w-containerLg mx-auto">
      {/* FIRST ANCHOR */}
      <div id="first-product" className="md:min-h-[300px] min-h-[640px]">
        <motion.a
          whileHover="hover"
          initial="init"
          href="#"
          className="relative overflow-hidden flex flex-col h-full p-6 rounded-lg"
        >
          <div className="flex flex-col justify-between gap-6 h-full md:w-[527px]">
            <div>
              <h3 className="flex items-center gap-2 text-white mb-lg">
                <svg
                  className="MuiBox-root jss763"
                  aria-label="Novo: C6 TechInvest"
                  role="img"
                  width="170"
                  height="20"
                  viewBox="0 0 170 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M44.105 2.342h-6.722v-1.23h14.81v1.23h-6.722v17.469h-1.36V2.342h-.005zM64.118 13.16H52.135c.132 3.312 2.56 5.552 5.9 5.552 1.759 0 3.387-.64 4.455-1.952l.775.883c-1.229 1.498-3.15 2.27-5.255 2.27-4.217 0-7.176-2.938-7.176-7.076 0-4.137 2.856-7.075 6.669-7.075 3.812 0 6.644 2.884 6.644 7.022-.004.107-.029.244-.029.375zm-11.953-1.04h10.671c-.185-3.02-2.374-5.182-5.338-5.182s-5.119 2.137-5.333 5.182zM65.455 12.837c0-4.167 2.964-7.075 7.044-7.075 2.213 0 4.134.854 5.285 2.562l-.99.722c-1.014-1.415-2.56-2.083-4.295-2.083-3.28 0-5.684 2.351-5.684 5.874 0 3.523 2.403 5.875 5.684 5.875 1.736 0 3.28-.668 4.295-2.084l.99.723c-1.146 1.683-3.067 2.561-5.285 2.561-4.085.005-7.044-2.932-7.044-7.075zM92.697 11.666v8.144h-1.336v-8.036c0-3.152-1.682-4.806-4.51-4.806-3.28 0-5.284 2.108-5.284 5.42v7.427h-1.335V0h1.335v8.788c.96-1.898 2.882-3.016 5.47-3.016 3.393-.01 5.66 1.991 5.66 5.894zM96.458 1.117h3.471v18.692h-3.47V1.117zM117.38 11.637v8.173h-3.334v-7.744c0-2.537-1.253-3.767-3.388-3.767-2.374 0-3.978 1.444-3.978 4.299v7.212h-3.335V5.547h3.174v1.845c1.092-1.308 2.827-2 4.909-2 3.417-.006 5.952 1.946 5.952 6.245zM133.361 5.547l-6.108 14.263h-3.442l-6.108-14.263h3.471l4.431 10.574 4.563-10.574h3.193zM147.077 13.75h-11.178c.4 2.083 2.135 3.42 4.617 3.42 1.599 0 2.856-.508 3.87-1.547l1.79 2.054C144.893 19.2 142.895 20 140.438 20c-4.778 0-7.874-3.07-7.874-7.32s3.12-7.289 7.367-7.289c4.163 0 7.205 2.913 7.205 7.373-.005.263-.029.663-.059.985zm-11.207-2.22h8.083c-.269-2.055-1.843-3.475-4.027-3.475-2.16.005-3.735 1.39-4.056 3.474zM147.399 18.394l1.282-2.537c1.253.83 3.174 1.415 4.963 1.415 2.106 0 2.988-.585 2.988-1.576 0-2.723-8.804-.161-8.804-5.85 0-2.699 2.428-4.46 6.269-4.46 1.897 0 4.056.454 5.338 1.23l-1.282 2.537c-1.36-.8-2.72-1.069-4.08-1.069-2.028 0-2.989.669-2.989 1.6 0 2.884 8.805.323 8.805 5.905 0 2.669-2.457 4.406-6.46 4.406-2.374 0-4.748-.693-6.03-1.6z"></path>
                  <path d="M170 19.034c-.799.639-2.003.961-3.203.961-3.12 0-4.909-1.654-4.909-4.806V8.324h-2.349v-2.67h2.349V2.396h3.335v3.26h3.817v2.669h-3.817v6.782c0 1.39.692 2.137 1.974 2.137.693 0 1.36-.185 1.867-.585l.936 2.376zM12.222 13.628a3.283 3.283 0 0 1-2.199.815c-1.068 0-1.935-.371-2.603-1.118-.668-.746-1-1.722-1-2.927 0-1.215.332-2.196.995-2.938.663-.746 1.53-1.117 2.608-1.117.785 0 1.492.244 2.12.742.634.492 1.078 1.146 1.341 1.951h6.153c-.322-2.454-1.365-4.435-3.135-5.948C14.732 1.576 12.562.82 9.994.82c-1.901 0-3.617.41-5.143 1.234A8.971 8.971 0 0 0 1.282 5.48C.43 6.943 0 8.583 0 10.403c0 1.82.429 3.464 1.282 4.923.853 1.464 2.043 2.605 3.569 3.425 1.526.82 3.237 1.235 5.143 1.235 2.608 0 4.807-.786 6.596-2.352 1.784-1.567 2.822-3.616 3.11-6.148h-6.24c-.19.888-.605 1.6-1.238 2.142zM34.372 8.646c-1.214-1.142-2.779-1.712-4.695-1.712-.194 0-.463.01-.804.024l3.393-5.533h-6.06L23.34 6.114c-.81 1.332-1.414 2.557-1.799 3.674a10.11 10.11 0 0 0-.58 3.338c0 2.024.707 3.674 2.12 4.947 1.414 1.274 3.247 1.908 5.505 1.908 2.281 0 4.119-.634 5.518-1.903 1.394-1.269 2.091-2.937 2.091-5.006-.005-1.806-.609-3.284-1.823-4.426zm-4.09 6.129c-.439.439-1.004.658-1.701.658-.697 0-1.263-.22-1.697-.658-.439-.44-.658-1.005-.658-1.698 0-.698.22-1.269.658-1.713.434-.444 1.004-.668 1.697-.668.697 0 1.262.224 1.701.668.439.444.653 1.015.653 1.713 0 .697-.22 1.263-.653 1.698z"></path>
                </svg>
                <span className="text-white font-bold bg-blue-500 px-2 rounded-3xl">
                  Novo
                </span>
              </h3>

              <h4 className="text-lg text-white font-semibold md:text-2xl mb-sm">
                Seja voc?? mesmo seu assessor de investimentos
              </h4>
              <p className="text-base text-white opacity-80 md:text-md">
                Montamos uma carteira diversificada em busca do melhor retorno
                de acordo com os seus objetivos.
              </p>
            </div>

            <div className="">
              <div className="relative inline">
                <motion.span
                  variants={spanHoverVariant}
                  className="relative text-xs text-white uppercase"
                >
                  VER PRODUTO
                </motion.span>
                <motion.hr
                  variants={undelineHoverVariant}
                  className="absolute rounded-lg left-0 -bottom-[6px] bg-white w-[25%] h-[0.5px] opacity-40"
                />
              </div>
            </div>
          </div>

          <div>
            <motion.div
              variants={imageScaleVariant}
              className="md:hidden absolute -z-20 top-0 left-0 right-0 bottom-0"
            >
              <picture>
                <Image
                  src={TechInvestImg}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  quality={100}
                />
              </picture>
            </motion.div>

            <motion.div
              variants={imageScaleVariant}
              className="hidden md:block absolute -z-20 top-0 left-0 right-0 bottom-0"
            >
              <picture>
                <Image
                  src="/static/techinvest.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </picture>
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* SECOND ANCHOR */}
      <div
        id="second-product"
        className="relative overflow-hidden md:min-h-[300px]"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className="md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0 flex justify-between bg-black rounded-lg px-4 py-6"
        >
          <div className="flex flex-col w-full h-full md:justify-between">
            <div>
              <h3 className="mb-6 text-white">
                <svg
                  aria-label="C6 Store"
                  role="img"
                  width="176"
                  height="32"
                  viewBox="0 0 176 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.607 17.815c-.326 1.478-1.019 2.67-2.08 3.578a5.513 5.513 0 0 1-3.694 1.361c-1.797 0-3.255-.622-4.373-1.868-1.118-1.245-1.677-2.874-1.677-4.886 0-2.026.555-3.662 1.667-4.908 1.11-1.245 2.572-1.868 4.383-1.868 1.317 0 2.505.412 3.566 1.235 1.062.823 1.812 1.91 2.25 3.261h10.338c-.538-4.095-2.293-7.405-5.264-9.931C24.751 1.263 21.107 0 16.791 0c-3.199 0-6.079.686-8.64 2.058-2.561 1.372-4.56 3.279-5.997 5.72C.718 10.22 0 12.96 0 16c0 3.04.718 5.78 2.154 8.221 1.437 2.442 3.436 4.349 5.997 5.721C10.712 31.314 13.592 32 16.791 32c4.386 0 8.08-1.309 11.08-3.926 3-2.618 4.741-6.037 5.223-10.259H22.607zM60.8 20.47c0-3.024-1.02-5.49-3.056-7.397-2.038-1.907-4.667-2.86-7.887-2.86-.33 0-.78.015-1.35.045l5.703-9.235-10.184.002-4.821 7.825c-1.364 2.22-2.37 4.265-3.023 6.134-.65 1.87-.977 3.728-.977 5.575 0 3.382 1.187 6.134 3.562 8.257C41.14 30.938 44.224 32 48.013 32c3.836 0 6.926-1.058 9.27-3.173 2.345-2.116 3.517-4.901 3.517-8.357zm-8.831 0c0 1.162-.368 2.108-1.101 2.837-.734.73-1.686 1.095-2.855 1.095-1.168 0-2.12-.364-2.853-1.095-.734-.73-1.102-1.675-1.102-2.837 0-1.162.368-2.116 1.102-2.86.733-.746 1.685-1.118 2.854-1.118 1.168 0 2.12.372 2.854 1.117.733.745 1.1 1.699 1.1 2.86zM74.435 32c6.958 0 11.078-3.662 11.078-8.835 0-4.487-2.518-7.188-9.979-9.248-4.715-1.328-6.683-2.472-6.683-5.402 0-3.021 2.289-4.898 6.454-4.898 2.38 0 5.402.778 7.873 2.38l1.007-3.525C81.76.916 78.465 0 75.26 0c-6.774 0-10.573 3.662-10.573 8.652 0 4.899 2.975 7.234 9.338 8.973 5.08 1.42 7.232 2.701 7.232 5.723 0 3.067-2.518 5.035-6.958 5.035-3.204 0-6.912-1.236-9.292-3.158L64 28.75C66.335 30.764 70.637 32 74.436 32zm26.112 0c1.19 0 2.38-.137 2.975-.458V28.11c-.641.274-1.465.457-2.426.457-3.067 0-4.394-1.556-4.394-4.44V11.308h6.82V8.01h-6.775V0L92.72 1.282v6.73h-4.394v3.296h4.394v13.23c0 4.624 2.93 7.462 7.828 7.462zm30.669-12.315c0 7.28-5.218 12.315-12.176 12.315-6.957 0-12.176-5.036-12.176-12.315s5.219-12.223 12.176-12.223c6.958 0 12.176 4.944 12.176 12.223zm-20.278 0c0 5.22 3.342 8.744 8.102 8.744 4.807 0 8.102-3.525 8.102-8.744 0-5.219-3.295-8.652-8.102-8.652-4.76 0-8.102 3.433-8.102 8.652zm30.579 11.811V16.481c.824-1.969 3.25-5.082 7.003-5.082.641 0 1.328.092 1.877.275l.183-3.846c-.458-.091-1.007-.183-1.511-.183-3.89 0-6.316 2.29-7.644 5.082l-.412-4.716h-3.524v23.485h4.028zm33.087-2.105c-2.06 1.51-5.493 2.609-9.201 2.609-7.369 0-12.496-4.99-12.496-12.223 0-6.913 4.76-12.315 11.398-12.315 6.5 0 10.894 4.807 10.894 11.765 0 .596 0 1.053-.092 1.74h-18.172c.458 4.715 3.891 7.6 8.697 7.6 2.976 0 5.722-.825 7.736-2.106l1.236 2.93zM164.26 10.758c-3.845 0-6.912 2.839-7.324 7.188h14.419c-.32-4.304-2.93-7.188-7.095-7.188z"
                    fill="#FBFBFB"
                  ></path>
                </svg>
              </h3>
              <h4 className="text-lg text-white font-bold md:text-2xl">
                A loja dentro do app C6 Bank
              </h4>
              <p className="text-base text-white opacity-80 md:w-[248px]">
                <strong>Milhares</strong> de produtos,{" "}
                <strong>descontos de at?? 50%</strong> e cupons exclusivos.
              </p>
            </div>

            <motion.div
              variants={imageScaleVariant}
              className="relative overflow-hidden m-10 mx-auto w-full pt-[50%] flex justify-center md:m-2 md:absolute md:pt-0 h-full md:right-0 md:top-0 md:w-[40%] xl:w-[50%]"
            >
              <div className="absolute top-0 h-full lg:h-[300px]">
                <video
                  preload="auto"
                  loop
                  muted
                  autoPlay
                  playsInline
                  webkit-playsinline={1}
                  x5-playsinline={1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <source
                    src="/static/c6store-box-video.webm"
                    type="video/webm"
                  />
                  <source
                    src="/static/c6store-box-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </motion.div>

            <div>
              <div className="relative inline">
                <motion.span
                  variants={spanHoverVariant}
                  className="relative text-xs text-white uppercase"
                >
                  IR PARA C6 STORE
                </motion.span>
                <motion.hr
                  variants={undelineHoverVariant}
                  className="absolute rounded-lg left-0 -bottom-[6px] bg-white w-[25%] h-[0.5px] opacity-40"
                />
              </div>
            </div>
          </div>
        </motion.a>
      </div>

      {/* THIRD ANCHOR */}
      <div
        id="third-product"
        className="bg-gray-50 min-h-[635px] rounded-lg overflow-hidden"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className="relative overflow-hidden flex flex-col h-full p-6"
        >
          <div>
            <h3 className="flex items-center gap-2 text-white h-5 mb-6">
              <svg
                aria-label="Cart??o C6"
                role="img"
                fill="hsla(0, 0%, 14%, 1)"
                viewBox="0 0 325 54"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[120px] font-bold"
              >
                <path d="M257.6 35.8c-1.8 1.5-3.8 2.3-6.1 2.3-3 0-5.4-1-7.3-3.1-1.9-2.1-2.8-4.8-2.8-8.1 0-3.4.9-6.1 2.8-8.2 1.8-2.1 4.3-3.1 7.3-3.1 2.2 0 4.2.7 5.9 2.1 1.8 1.4 3 3.2 3.7 5.4h17.1c-.9-6.8-3.8-12.3-8.7-16.6-4.9-4.2-11-6.3-18.1-6.3-5.3 0-10.1 1.1-14.3 3.4-4.2 2.3-7.6 5.5-9.9 9.5-2.4 4.1-3.6 8.6-3.6 13.7s1.2 9.6 3.6 13.7c2.4 4.1 5.7 7.3 9.9 9.5 4.2 2.3 9 3.4 14.3 3.4 7.3 0 13.4-2.2 18.4-6.5 5-4.4 7.9-10.1 8.7-17.1h-17.4c-.6 2.5-1.7 4.5-3.5 6zM307.9 39c-1.2 1.2-2.8 1.8-4.7 1.8-1.9 0-3.5-.6-4.7-1.8-1.2-1.2-1.8-2.8-1.8-4.7 0-1.9.6-3.5 1.8-4.8 1.2-1.2 2.8-1.9 4.7-1.9 1.9 0 3.5.6 4.7 1.9 1.2 1.2 1.8 2.8 1.8 4.8.1 1.9-.5 3.5-1.8 4.7zm11.4-17c-3.4-3.2-7.7-4.8-13.1-4.8-.5 0-1.3 0-2.2.1l9.5-15.4h-16.9l-8 13c-2.3 3.7-3.9 7.1-5 10.2-1.1 3.1-1.6 6.2-1.6 9.3 0 5.6 2 10.2 5.9 13.8 3.9 3.5 9 5.3 15.3 5.3 6.4 0 11.5-1.8 15.4-5.3 3.9-3.5 5.8-8.2 5.8-13.9 0-5-1.7-9.2-5.1-12.3zM13.7 49.6c-4-2.2-7.1-5.3-9.4-9.2C2 36.5.9 32.1.9 27.2.9 22.3 2 17.9 4.3 14c2.3-3.9 5.4-7 9.4-9.2 4-2.2 8.5-3.3 13.5-3.3 3.7 0 7.1.6 10.2 1.8 3.1 1.2 5.7 2.9 7.9 5.3L43 11c-4.1-4-9.3-6-15.6-6-4.3 0-8.1 1-11.6 2.9s-6.2 4.6-8.2 8c-2 3.4-3 7.2-3 11.4s1 8 3 11.4c2 3.4 4.7 6.1 8.2 8 3.5 1.9 7.4 2.9 11.6 2.9 6.3 0 11.5-2 15.6-6.1l2.3 2.4c-2.2 2.3-4.8 4.1-7.9 5.3-3.1 1.2-6.5 1.8-10.1 1.8-5.1-.1-9.6-1.2-13.6-3.4zM75.8 18c2.5 2.4 3.8 5.9 3.8 10.6v24h-3.5v-6.7c-1.2 2.2-3 4-5.3 5.2-2.3 1.2-5.1 1.9-8.3 1.9-4.2 0-7.5-1-10-3-2.4-2-3.7-4.6-3.7-7.8 0-3.1 1.1-5.7 3.4-7.7 2.2-2 5.8-2.9 10.8-2.9h13v-3c0-3.5-1-6.2-2.9-8.1-1.9-1.8-4.7-2.8-8.4-2.8-2.5 0-4.9.4-7.2 1.3s-4.2 2-5.8 3.5l-1.8-2.6c1.9-1.7 4.2-3 6.8-4 2.7-.9 5.4-1.4 8.3-1.4 4.6-.1 8.3 1.1 10.8 3.5zm-4.9 29.7c2.2-1.5 3.9-3.6 5-6.3v-7.1H63c-3.7 0-6.4.7-8.1 2-1.7 1.3-2.5 3.2-2.5 5.6 0 2.5.9 4.4 2.8 5.8 1.8 1.4 4.4 2.1 7.8 2.1 3.1.1 5.7-.7 7.9-2.1zM99.8 16.6c2.5-1.5 5.5-2.2 9-2.2V18l-.9-.1c-4.2 0-7.5 1.3-9.9 4-2.4 2.6-3.6 6.3-3.6 11v19.7h-3.6V14.7h3.5V23c1.2-2.8 3-4.9 5.5-6.4zM135.7 50.2c-.9.9-2.1 1.5-3.4 2-1.4.5-2.8.7-4.3.7-3.3 0-5.8-.9-7.6-2.7-1.8-1.8-2.7-4.3-2.7-7.6V17.8h-7v-3.1h7V6.4h3.6v8.3h12v3.1h-12v24.4c0 2.5.6 4.3 1.8 5.6 1.2 1.3 2.9 1.9 5.3 1.9s4.3-.7 5.9-2.1l1.4 2.6zM165.7 18c2.5 2.4 3.8 5.9 3.8 10.6v24H166v-6.7c-1.2 2.2-3 4-5.3 5.2-2.3 1.2-5.1 1.9-8.3 1.9-4.2 0-7.5-1-10-3-2.4-2-3.7-4.6-3.7-7.8 0-3.1 1.1-5.7 3.4-7.7 2.2-2 5.8-2.9 10.8-2.9h13v-3c0-3.5-1-6.2-2.9-8.1-1.9-1.8-4.7-2.8-8.4-2.8-2.5 0-4.9.4-7.2 1.3s-4.2 2-5.8 3.5l-1.8-2.6c1.9-1.7 4.2-3 6.8-4 2.7-.9 5.4-1.4 8.3-1.4 4.7-.1 8.3 1.1 10.8 3.5zm-4.8 29.7c2.2-1.5 3.9-3.6 5-6.3v-7.1H153c-3.7 0-6.4.7-8.1 2-1.7 1.3-2.5 3.2-2.5 5.6 0 2.5.9 4.4 2.8 5.8 1.8 1.4 4.4 2.1 7.8 2.1 3 .1 5.7-.7 7.9-2.1zm-4.2-40.5c-.8-.5-1.7-1.2-2.6-2.1-.8-.7-1.5-1.3-2.1-1.6-.6-.4-1.1-.5-1.8-.5-1.1 0-2 .4-2.7 1.3-.7.8-1.1 2-1.2 3.4H144c.1-2.2.7-3.9 1.7-5.3 1.1-1.3 2.5-2 4.3-2 1.1 0 2 .3 2.9.8.8.5 1.7 1.2 2.6 2.1.8.7 1.5 1.3 2.1 1.6.6.4 1.1.5 1.8.5 1.1 0 2-.4 2.7-1.2.7-.8 1.1-1.9 1.2-3.3h2.4c-.1 2.1-.7 3.8-1.8 5.2-1.1 1.3-2.5 2-4.2 2-1.2-.2-2.1-.4-3-.9zM186 50.4c-2.9-1.6-5.1-3.9-6.8-6.9-1.6-2.9-2.5-6.2-2.5-9.9s.8-7 2.5-9.9c1.6-2.9 3.9-5.2 6.8-6.9 2.9-1.6 6.1-2.5 9.7-2.5 3.6 0 6.8.8 9.7 2.5 2.9 1.6 5.1 3.9 6.8 6.9 1.6 2.9 2.5 6.2 2.5 9.9s-.8 7-2.5 9.9c-1.6 2.9-3.9 5.2-6.8 6.9-2.9 1.7-6.1 2.5-9.7 2.5-3.6-.1-6.8-.9-9.7-2.5zm17.5-2.8c2.3-1.4 4.1-3.2 5.4-5.7 1.3-2.4 2-5.2 2-8.3 0-3.1-.7-5.9-2-8.3-1.3-2.4-3.1-4.3-5.4-5.7-2.3-1.4-4.9-2-7.8-2-2.9 0-5.5.7-7.8 2-2.3 1.4-4.1 3.2-5.4 5.7-1.3 2.4-2 5.2-2 8.3 0 3.1.7 5.9 2 8.3 1.3 2.4 3.1 4.3 5.4 5.7 2.3 1.4 4.9 2 7.8 2 2.9 0 5.5-.7 7.8-2z"></path>
              </svg>
            </h3>
          </div>

          <div>
            <figure className="relative w-full mt-20 mb-lg pb-[40%]">
              {/* RIGHT SIDE */}
              <motion.div
                variants={cardVariantsMoveX(2)}
                className="absolute top-0 left-0 right-[-15.5%] w-[26%] z-[9] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={SpiceCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(4)}
                className="absolute top-0 left-0 right-[-30.5%] w-[26%] z-[8] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={GoldCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(6)}
                className="absolute top-0 left-0 right-[-45.5%] w-[26%] z-[7] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={ChampagneCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(6)}
                className="absolute top-0 left-0 right-[-60.5%] w-[26%] z-[6] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={SilverCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(8)}
                className="absolute top-0 left-0 right-[-75.5%] w-[26%] z-[5] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={BorealForestCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(10)}
                className="absolute top-0 left-0 right-[-90.5%] w-[26%] z-[4] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={BlueCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              {/* MID */}
              <div className="absolute top-0 left-0 right-0 z-[10] w-[26%] h-full mx-auto">
                <picture>
                  <Image
                    src={PinkCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </div>

              {/* LEFT SIDE */}
              <motion.div
                variants={cardVariantsMoveX(-2)}
                className="absolute top-0 left-0 right-[15.5%] w-[26%] z-[11] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={BubblegumCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(-4)}
                className="absolute top-0 left-0 right-[30.5%] w-[26%] z-[12] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={RedCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(-6)}
                className="absolute top-0 left-0 right-[45.5%] w-[26%] z-[13] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={SunsetCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(-8)}
                className="absolute top-0 left-0 right-[60.5%] w-[26%] z-[14] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={RainbowCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>

              <motion.div
                variants={cardVariantsMoveX(-10)}
                className="absolute top-0 left-0 right-[75.5%] w-[26%] z-[15] h-full mx-auto"
              >
                <picture>
                  <Image
                    src={AcqueCardImg}
                    alt="Cart??o Pink"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                  />
                </picture>
              </motion.div>
            </figure>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-lg">
              Cart??o de cr??dito <strong>sem anuidade</strong>
            </h4>

            <ul className="list-disc px-4 text-base">
              <li className="font-medium mb-2">
                Personalize o nome que vai no cart??o e escolha a cor que combina
                com voc??
              </li>
              <li className="font-medium mb-2"> Aproxime e pague</li>
              <li className="font-medium mb-2"> Cart??o de cr??dito virtual</li>
              <li className="font-medium mb-2">
                {" "}
                1?? cart??o de cr??dito adicional gr??tis
              </li>
            </ul>
          </div>
        </motion.a>
      </div>

      {/* FOURTY ANCHOR */}
      <div
        id="fourty-product"
        className="relative overflow-hidden h-full md:min-h-[635px]"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className="gradient relative overflow-hidden z-[1] flex flex-col rounded-lg md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0  p-6"
        >
          <div className="mb-auto">
            <h3 className="text-white h-5 mb-6">
              <svg
                aria-label="C6 Carbon"
                role="img"
                viewBox="0 0 122 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[120px] font-bold"
              >
                <path d="M40.23 17.502c-1.249-.612-2.207-1.475-2.88-2.582-.668-1.111-1.005-2.385-1.005-3.821 0-1.929.443-3.676 1.324-5.244.88-1.567 2.123-2.805 3.722-3.711C42.99 1.238 44.83.785 46.903.785c1.486 0 2.795.245 3.93.736 1.136.492 1.996 1.2 2.583 2.13l-2.303 1.935c-.962-1.337-2.441-2.01-4.433-2.01-1.422 0-2.671.326-3.747.98a6.686 6.686 0 0 0-2.498 2.658c-.587 1.118-.88 2.35-.88 3.686 0 1.454.467 2.604 1.397 3.454.93.849 2.254 1.273 3.97 1.273 1.974 0 3.601-.662 4.875-1.985l1.86 2.01a7.57 7.57 0 0 1-3.013 2.084c-1.193.456-2.516.686-3.97.686-1.716 0-3.195-.308-4.444-.92z"></path>
                <path d="m67.186 5.095-2.597 13.08h-2.915l.269-1.349c-1.143 1.012-2.565 1.518-4.264 1.518-1.079 0-2.055-.23-2.925-.686a5.06 5.06 0 0 1-2.07-1.996c-.506-.873-.76-1.9-.76-3.074 0-1.454.321-2.763.965-3.93a7.043 7.043 0 0 1 2.646-2.732c1.118-.654 2.37-.98 3.761-.98 2.091 0 3.577.693 4.458 2.084l.368-1.935h3.064zM60.779 15.1a4.392 4.392 0 0 0 1.606-1.74c.393-.744.587-1.59.587-2.537 0-1.03-.3-1.833-.906-2.413-.605-.58-1.454-.87-2.547-.87-.867 0-1.638.208-2.314.626a4.415 4.415 0 0 0-1.606 1.74c-.393.743-.587 1.589-.587 2.537 0 1.03.3 1.833.905 2.413.605.58 1.455.87 2.548.87.867 0 1.638-.209 2.314-.626zM74.669 5.364c.824-.276 1.808-.418 2.95-.418l-.562 2.915c-.28-.05-.53-.074-.76-.074-2.499 0-4.01 1.316-4.533 3.945l-1.298 6.442h-3.06l2.596-13.08h2.915l-.343 1.692a4.682 4.682 0 0 1 2.095-1.422zM88.803 5.632a5.079 5.079 0 0 1 2.07 1.985c.505.867.76 1.886.76 3.06 0 1.455-.322 2.764-.966 3.931a7.12 7.12 0 0 1-2.646 2.742c-1.118.662-2.363.99-3.736.99-1.08 0-2.01-.19-2.791-.576a3.986 3.986 0 0 1-1.787-1.677l-.418 2.084h-2.915L79.997 0h3.06l-1.249 6.319c1.111-.913 2.466-1.373 4.066-1.373 1.079.004 2.055.23 2.929.686zM86.355 15.1a4.392 4.392 0 0 0 1.606-1.74c.393-.744.587-1.59.587-2.537 0-1.03-.3-1.833-.906-2.413-.605-.58-1.454-.87-2.547-.87-.867 0-1.638.208-2.314.626a4.416 4.416 0 0 0-1.606 1.74c-.393.743-.587 1.589-.587 2.537 0 1.03.3 1.833.906 2.413.604.58 1.454.87 2.547.87.863 0 1.634-.209 2.314-.626zM95.097 17.626c-.955-.48-1.695-1.157-2.218-2.02-.524-.867-.782-1.868-.782-3.014 0-1.454.329-2.76.99-3.92a7.129 7.129 0 0 1 2.767-2.732c1.185-.661 2.52-.99 4.005-.99 1.274 0 2.392.237 3.358.71.962.475 1.705 1.144 2.228 2.01.524.867.786 1.872.786 3.015 0 1.454-.336 2.76-1.005 3.92a7.268 7.268 0 0 1-2.781 2.742c-1.185.668-2.519 1.005-4.005 1.005-1.273-.004-2.388-.245-3.343-.726zm5.855-2.526a4.38 4.38 0 0 0 1.606-1.74c.393-.743.588-1.59.588-2.537 0-1.03-.301-1.833-.906-2.413-.605-.58-1.454-.87-2.547-.87-.867 0-1.638.208-2.314.626a4.415 4.415 0 0 0-1.606 1.74c-.393.743-.588 1.589-.588 2.537 0 1.03.301 1.833.906 2.413.605.58 1.454.87 2.547.87.864 0 1.635-.208 2.314-.626zM119.788 6.1c.857.767 1.288 1.853 1.288 3.258 0 .393-.056.916-.173 1.567l-1.444 7.25h-3.06l1.422-7.179c.064-.325.099-.662.099-1.005 0-1.585-.874-2.377-2.621-2.377-1.129 0-2.059.315-2.792.944-.736.63-1.235 1.571-1.493 2.83l-1.373 6.786h-3.06l2.597-13.08h2.915l-.293 1.444c1.174-1.061 2.678-1.592 4.507-1.592 1.461.004 2.625.386 3.481 1.153zM11.491 12.532a3.085 3.085 0 0 1-2.066.767c-1.005 0-1.822-.35-2.448-1.05-.626-.7-.938-1.617-.938-2.75 0-1.139.312-2.062.934-2.763.623-.7 1.44-1.05 2.452-1.05.736 0 1.401.23 1.995.693.595.464 1.016 1.076 1.26 1.836h5.788c-.3-2.306-1.284-4.167-2.947-5.59C13.858 1.203 11.817.492 9.401.492c-1.79 0-3.404.386-4.837 1.157a8.477 8.477 0 0 0-3.358 3.22C.403 6.24 0 7.783 0 9.495c0 1.712.403 3.255 1.206 4.628.804 1.376 1.922 2.448 3.358 3.22C5.997 18.113 7.61 18.5 9.4 18.5c2.456 0 4.525-.736 6.202-2.211 1.68-1.472 2.654-3.4 2.923-5.774h-5.87c-.184.835-.573 1.504-1.164 2.017zM28.474 13.607c-.41.41-.945.616-1.6.616-.654 0-1.185-.206-1.595-.616-.41-.41-.616-.945-.616-1.6 0-.654.205-1.192.616-1.609.41-.421.944-.63 1.595-.63.655 0 1.186.209 1.6.63.41.417.615.955.615 1.61 0 .654-.205 1.189-.615 1.599zm3.849-5.76c-1.14-1.072-2.611-1.61-4.416-1.61-.184 0-.435.007-.753.025l3.191-5.2h-5.7l-2.7 4.404c-.763 1.249-1.326 2.399-1.69 3.453a9.553 9.553 0 0 0-.549 3.138c0 1.904.666 3.453 1.996 4.65 1.33 1.195 3.053 1.793 5.176 1.793 2.147 0 3.878-.595 5.19-1.787 1.313-1.192 1.967-2.76 1.967-4.705-.003-1.698-.573-3.089-1.712-4.16z"></path>
              </svg>
            </h3>
            <h4 className="text-lg md:text-2xl text-white mb-8">
              <span className="opacity-80">O Mastercard??Black que d??</span>{" "}
              <strong>2,5 pontos</strong>{" "}
              <span className="opacity-80">por d??lar gasto</span>
            </h4>

            <ul className="list-disc px-4 text-base text-white opacity-80">
              <li className="font-medium mb-2">
                Personalize o nome que vai no cart??o e escolha a cor que combina
                com voc??
              </li>
              <li className="font-medium mb-2"> Aproxime e pague</li>
              <li className="font-medium mb-2"> Cart??o de cr??dito virtual</li>
              <li className="font-medium mb-2">
                {" "}
                1?? cart??o de cr??dito adicional gr??tis
              </li>
            </ul>
          </div>

          <figure className="absolute bottom-6 right-6 z-[-1] w-full pt-[90%] md:pt-0">
            <motion.div
              variants={imageUpVariant}
              className="absolute  -bottom-10 -right-10 z-20 w-[80%]"
            >
              <div className="pt-[70%]"></div>
              <motion.picture>
                <Image
                  src={CarbonCardImg}
                  alt="Cart??o Pink"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  quality={100}
                />
              </motion.picture>
            </motion.div>
            <motion.div
              variants={imageDownVariant}
              className="absolute -bottom-40 -right-24 z-10 w-[78%]"
            >
              <div className="pt-[93%]"></div>
              <picture>
                <Image
                  src={CarbonCardAppImg}
                  alt="Cart??o Pink"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70"
                  placeholder="blur"
                  quality={100}
                />
              </picture>
            </motion.div>
          </figure>

          <div className="w-full pt-[45%] md:pt-0" />

          <div>
            <div className="relative inline">
              <motion.span
                variants={spanHoverVariant}
                className="relative text-xs text-white uppercase"
              >
                VER PRODUTO
              </motion.span>
              <motion.hr
                variants={undelineHoverVariant}
                className="absolute rounded-lg left-0 -bottom-[6px] bg-white w-[25%] h-[0.5px] opacity-40"
              />
            </div>
          </div>
        </motion.a>
      </div>

      {/* FIFTY ANCHOR */}
      <div
        id="fifty-product"
        className="relative overflow-hidden min-h-[600px]"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className="gradient relative overflow-hidden block p-6"
        >
          <div>
            <div className="flex flex-col mb-[100%]">
              <h3 className="flex items-center gap-2 text-white h-5 mb-6">
                <svg
                  aria-label="C6Invest"
                  role="img"
                  viewBox="0 0 139 25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[120px]"
                >
                  <path d="M52.682.754h1.727v23.792h-1.727V.754zm23.666 13.424V24.54H74.62V14.316c0-4.03-2.142-6.119-5.757-6.119-4.179 0-6.729 2.683-6.729 6.908v9.44h-1.727V6.805h1.63v3.839c1.19-2.481 3.672-3.978 7.04-3.978 4.38 0 7.27 2.544 7.27 7.512zm19.208-7.374L87.53 24.546h-1.727L77.81 6.804h1.801l7.07 15.876L93.83 6.804h1.727zm16.481 9.28h-15.26c.172 4.213 3.263 7.068 7.483 7.068a7.136 7.136 0 0 0 5.687-2.48l.985 1.15a8.473 8.473 0 0 1-6.695 2.879c-5.37 0-9.141-3.742-9.141-9.009s3.65-9.026 8.519-9.026c4.87 0 8.462 3.673 8.462 8.94-.006.138-.04.305-.04.478zm-15.226-1.325h13.597c-.236-3.822-3.028-6.596-6.793-6.596-3.764 0-6.533 2.717-6.804 6.596zm16.216 7.645.783-1.358a10.31 10.31 0 0 0 6.39 2.14c3.736 0 5.232-1.323 5.232-3.332 0-5.18-11.76-1.359-11.76-8.324 0-2.688 2.245-4.864 6.729-4.864 2.245 0 4.692.68 6.085 1.727l-.783 1.393a9.123 9.123 0 0 0-5.336-1.6c-3.454 0-4.997 1.427-4.997 3.333 0 5.336 11.761 1.56 11.761 8.33 0 2.877-2.481 4.858-7 4.858-2.925-.023-5.711-1.008-7.104-2.303zm25.972 1.025a5.41 5.41 0 0 1-3.638 1.255c-3.131 0-4.83-1.837-4.83-4.83V8.266h-3.263V6.804h3.263V2.93h1.727v3.874h5.647v1.462h-5.647v11.421c0 2.303 1.123 3.534 3.299 3.534a4.092 4.092 0 0 0 2.757-.984l.685 1.192zM15.945 16.693c-.795.7-1.82 1.08-2.879 1.065a4.322 4.322 0 0 1-3.396-1.456 5.532 5.532 0 0 1-1.307-3.823A5.56 5.56 0 0 1 9.66 8.646a4.334 4.334 0 0 1 3.407-1.457 4.415 4.415 0 0 1 2.77.962 5.18 5.18 0 0 1 1.726 2.55h8.06a11.858 11.858 0 0 0-4.088-7.743A12.612 12.612 0 0 0 13.044 0 13.936 13.936 0 0 0 6.33 1.606a11.691 11.691 0 0 0-4.657 4.472A12.463 12.463 0 0 0 0 12.497a12.468 12.468 0 0 0 1.675 6.424 11.766 11.766 0 0 0 4.657 4.473A13.936 13.936 0 0 0 13.043 25a12.59 12.59 0 0 0 8.635-3.069 12.054 12.054 0 0 0 4.03-8.013h-8.146a4.985 4.985 0 0 1-1.617 2.775zm23.572 1.515a3.074 3.074 0 0 1-5.29-2.216 3.05 3.05 0 0 1 .852-2.234 3.252 3.252 0 0 1 4.438 0 3.05 3.05 0 0 1 .852 2.234 2.993 2.993 0 0 1-.852 2.216zm5.337-7.996a8.566 8.566 0 0 0-6.125-2.233c-.254 0-.576 0-1.048.034L42.114.8h-7.915l-3.742 6.108a25.274 25.274 0 0 0-2.349 4.79 13.24 13.24 0 0 0-.76 4.357 8.268 8.268 0 0 0 2.77 6.453c1.841 1.658 4.234 2.486 7.177 2.486 2.944 0 5.344-.825 7.202-2.475a8.38 8.38 0 0 0 2.734-6.527 7.587 7.587 0 0 0-2.377-5.757"></path>
                </svg>
              </h3>

              <h4 className="text-lg md:text-2xl text-white font-semibold mb-2">
                Completo para todos os perfis
              </h4>

              <p className="opacity-80 text-white text-base font-medium">
                CDBs pr?? e p??s-fixados e IPCA+. Previd??ncia privada. Mais de 200
                fundos de investimento. A????es, FIIs, BDRs, ETFs e Mercados
                Futuros com corretagem zero.
              </p>
            </div>

            <div className="relative inline">
              <motion.span
                variants={spanHoverVariant}
                className="relative text-xs text-white uppercase"
              >
                VER PRODUTO
              </motion.span>
              <motion.hr
                variants={undelineHoverVariant}
                className="absolute rounded-lg left-0 -bottom-[6px] bg-white w-[25%] h-[0.5px] opacity-40"
              />
            </div>
          </div>

          <div className="absolute top-56 left-10 w-full">
            <motion.div
              variants={imageUpVariant}
              className="absolute  top-10 right-0 w-[60%] pt-[120%]"
            >
              <picture>
                <Image
                  src={C6InvestientoImg}
                  alt="Cart??o Pink"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  quality={100}
                />
              </picture>
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* SIXTY ANCHOR */}
      <div
        id="sixty-product"
        className="bg-gray-50 rounded-lg overflow-hidden md:min-h-[300px] h-full"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className="relative overflow-hidden flex flex-col h-full p-lg"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="pb-[50%] md:pb-0">
              <h3 className="flex items-center gap-2 text-white h-5 mb-6">
                <svg
                  className="w-[90px]"
                  aria-label="??tomos"
                  role="img"
                  fill="hsla(0, 0%, 14%, 1)"
                  viewBox="0 0 90 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.675 15.339H6.12l-2.113 3.473H0L10.491 2.59h3.705l3.994 16.222h-3.748l-.767-3.473zm-.622-2.85-1.375-6.252-3.82 6.251h5.195zM29.39 18.305c-.955-.463-1.679-1.114-2.2-1.953-.52-.84-.781-1.823-.781-2.938 0-1.374.318-2.604.97-3.704a6.916 6.916 0 0 1 2.691-2.59c1.143-.637 2.431-.955 3.878-.955 1.274 0 2.373.231 3.314.694.94.463 1.678 1.114 2.185 1.954.521.839.781 1.823.781 2.937 0 1.375-.318 2.605-.955 3.705a6.727 6.727 0 0 1-2.691 2.59c-1.158.637-2.446.955-3.878.955-1.26 0-2.359-.232-3.314-.695zm5.412-2.807c.55-.347.984-.825 1.302-1.447.304-.622.463-1.331.463-2.127 0-.854-.246-1.52-.738-2.012s-1.186-.738-2.083-.738c-.71 0-1.346.174-1.896.521-.55.348-.984.825-1.302 1.447-.304.623-.463 1.332-.463 2.128 0 .853.245 1.52.752 2.011.506.492 1.201.738 2.098.738.695 0 1.317-.174 1.867-.52zM61.544 7.264c.795.738 1.2 1.78 1.2 3.112 0 .492-.057.998-.159 1.534l-1.36 6.902h-3.617l1.316-6.657c.058-.303.087-.622.087-.954 0-.637-.159-1.115-.492-1.433-.333-.333-.825-.492-1.476-.492-1.75 0-2.836 1.042-3.27 3.126l-1.26 6.41h-3.617l1.317-6.657c.058-.303.087-.622.087-.926 0-.636-.16-1.114-.492-1.447-.333-.332-.825-.506-1.476-.506-1.751 0-2.836 1.056-3.285 3.169l-1.244 6.367h-3.618l2.474-12.46h3.43l-.275 1.303c1.085-.984 2.388-1.476 3.922-1.476.868 0 1.635.174 2.3.521.68.347 1.172.854 1.52 1.52a6.063 6.063 0 0 1 2.112-1.52c.81-.347 1.679-.52 2.649-.52 1.345-.015 2.43.346 3.227 1.084zM66.68 18.305c-.955-.463-1.678-1.114-2.199-1.953-.52-.84-.781-1.823-.781-2.938 0-1.374.318-2.604.97-3.704a6.916 6.916 0 0 1 2.69-2.59c1.144-.637 2.432-.955 3.879-.955 1.273 0 2.373.231 3.314.694.94.463 1.664 1.114 2.185 1.954.52.839.781 1.823.781 2.937 0 1.375-.318 2.605-.97 3.705a6.726 6.726 0 0 1-2.691 2.59c-1.158.637-2.446.955-3.878.955-1.245 0-2.344-.232-3.3-.695zm5.413-2.807c.55-.347.984-.825 1.302-1.447.304-.622.463-1.331.463-2.127 0-.854-.246-1.52-.738-2.012s-1.187-.738-2.084-.738c-.709 0-1.346.174-1.895.521-.565.348-.984.825-1.303 1.447-.304.623-.463 1.332-.463 2.128 0 .853.246 1.52.753 2.011.506.492 1.2.738 2.098.738.68 0 1.317-.174 1.867-.52zM86.187 11.851a17.953 17.953 0 0 0-2.17-.55c-.84-.173-1.433-.332-1.78-.477-.362-.145-.536-.376-.536-.71 0-.346.203-.65.622-.882.406-.231 1.013-.347 1.795-.347 1.432 0 2.662.318 3.69.955l1.302-2.648c-.579-.319-1.273-.579-2.084-.767a11.318 11.318 0 0 0-2.532-.275c-1.867 0-3.372.39-4.53 1.158-1.157.767-1.721 1.852-1.721 3.226 0 .796.217 1.404.636 1.867.42.463.926.782 1.505.984.58.203 1.317.39 2.214.55.782.16 1.36.304 1.722.434.362.145.536.362.536.666 0 .39-.203.68-.608.897-.405.203-1.013.318-1.823.318a8.82 8.82 0 0 1-2.36-.318 8.117 8.117 0 0 1-1.59-.622 6.768 6.768 0 0 1-.392.709 8.522 8.522 0 0 1-1.36 1.693c.536.376 1.288.695 2.243.926.97.246 1.983.362 3.068.362 1.852 0 3.372-.376 4.53-1.129 1.171-.752 1.75-1.823 1.75-3.227 0-.767-.217-1.374-.622-1.823-.449-.449-.94-.781-1.505-.97z"></path>
                  <path d="M26.091 17.032a6.354 6.354 0 0 1-.637-1.432c-.057.029-.115.072-.159.086-.506.275-.984.434-1.461.434-.883 0-1.317-.405-1.317-1.2 0-.218.014-.391.043-.507l.999-5.007h3.096l.565-2.778h-3.111l.607-3.04H21.1l-.608 3.04h-1.925l-.535 2.778h1.925l-.999 5.036c-.072.42-.116.781-.116 1.085 0 1.086.348 1.925 1.071 2.547.71.622 1.65.926 2.822.926 1.273 0 2.272-.304 3.111-.738.188-.101.507-.304.782-.492a6.863 6.863 0 0 1-.536-.738z"></path>
                  <path
                    d="M6.888 0 4.486 3.343H8.48L10.867 0h-3.98z"
                    fill="#FAD80E"
                  ></path>
                </svg>
              </h3>

              <h4 className="text-lg md:text-2xl  font-semibold mb-2 md:max-w-[170px] xl:max-w-full">
                Programa de pontos
              </h4>

              <p className="text-base opacity-80 w-full xl:max-w-[220px] lg:max-w-[195px] md:max-w-[170px] max-w-[340px]">
                Melhor que dinheiro: com os pontos ??tomos voc?? faz compras, paga
                despesas e muito mais
              </p>
            </div>
            <div>
              <div className="relative inline">
                <motion.span
                  variants={spanHoverVariant}
                  className="relative text-xs uppercase"
                >
                  VER PRODUTO
                </motion.span>
                <motion.hr
                  variants={undelineHoverVariant}
                  className="absolute rounded-lg left-0 -bottom-[6px] bg-[#242424] w-[25%] h-[0.5px] opacity-40"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0  right-0 md:-right-20 w-[70%] md:w-[80%] ">
            <motion.div
              variants={isSmall ? imageUpVariant : imageScaleVariant2}
              className="absolute top-40 right-0 sm:top-10 sm:-right-32 md:-top-10 md:-right-10 w-[70%] md:w-[80%] pb-[140%] md:pb-[160%]"
            >
              <picture>
                <Image
                  src={AtomosBoxAppImg}
                  alt="Cart??o Pink"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  quality={100}
                />
              </picture>
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* SEVENTY ANCHOR */}
      <div
        id="seventy-product"
        className="bg-gray-50 rounded-lg relative overflow-hidden h-full"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className=" overflow-hidden flex flex-col p-6 h-full"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="md:pb-0 pb-[70%]">
              <h3 className="flex items-center gap-2 text-white h-5 mb-6">
                <svg
                  className="w-[70px]"
                  aria-label="C6 Tag"
                  role="img"
                  fill="hsla(0, 0%, 14%, 1)"
                  viewBox="0 0 142 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M74.19 6.733h-9.7L65.66.961h26.384l-1.157 5.772H81.24l-4.938 24.515h-7.01L74.19 6.733z"></path>
                  <path d="m113.019 7.97-4.628 23.277H102l.431-2.3a10.307 10.307 0 0 1-7.131 2.69c-5.382 0-10.037-3.794-10.037-10.413 0-7.831 5.664-13.55 12.849-13.55 3.363 0 6.054 1.09 7.561 3.512l.619-3.215h6.727zm-8.826 10.388c0-3.162-1.951-5.153-5.382-5.153-3.969 0-6.821 3.121-6.821 7.655a4.817 4.817 0 0 0 5.382 5.153c3.982 0 6.835-3.135 6.835-7.655h-.014zM141.113 7.971l-3.875 19.375c-1.749 8.987-6.822 12.634-14.8 12.634a18.674 18.674 0 0 1-11.073-3.068l3.135-4.884a13.305 13.305 0 0 0 8.18 2.503c4.669 0 6.727-2.072 7.615-6.015l.175-.995a10.117 10.117 0 0 1-7.104 2.596c-5.745 0-10.293-3.673-10.293-9.768a12.631 12.631 0 0 1 3.786-9.125 12.615 12.615 0 0 1 9.198-3.603c3.458 0 6.445 1.211 7.871 4.158l.727-3.808h6.458zm-9.176 9.822c0-2.812-1.897-4.588-5.234-4.588a6.55 6.55 0 0 0-6.835 6.727c0 2.812 1.991 4.588 5.382 4.588a6.514 6.514 0 0 0 6.687-6.727zM20.29 21.277a5.382 5.382 0 0 1-3.645 1.346 5.517 5.517 0 0 1-4.32-1.857 6.956 6.956 0 0 1-1.668-4.857 7.037 7.037 0 0 1 1.655-4.87 5.504 5.504 0 0 1 4.333-1.857 5.57 5.57 0 0 1 3.538 1.224 6.525 6.525 0 0 1 2.22 3.243H32.63a15.123 15.123 0 0 0-5.22-9.876A16.024 16.024 0 0 0 16.644.006a17.774 17.774 0 0 0-8.57 2.045 14.921 14.921 0 0 0-5.948 5.691A15.93 15.93 0 0 0 .001 15.91a15.984 15.984 0 0 0 2.126 8.18 14.974 14.974 0 0 0 5.947 5.678 17.625 17.625 0 0 0 8.544 2.045c4.01.12 7.92-1.273 10.952-3.901a15.325 15.325 0 0 0 5.153-10.199h-10.36a6.324 6.324 0 0 1-2.059 3.566M50.28 23.175a3.915 3.915 0 0 1-6.727-2.826 3.902 3.902 0 0 1 1.09-2.852 4.158 4.158 0 0 1 5.638 0 3.903 3.903 0 0 1 1.09 2.839 3.82 3.82 0 0 1-1.09 2.825v.014zM57.09 12.99a10.926 10.926 0 0 0-7.804-2.84H47.94l5.65-9.121H43.528l-4.763 7.776a31.647 31.647 0 0 0-3 6.095 17.154 17.154 0 0 0-.956 5.543 10.533 10.533 0 0 0 3.512 8.208 13.158 13.158 0 0 0 9.149 3.162c3.344.156 6.621-.97 9.162-3.149a10.682 10.682 0 0 0 3.472-8.315 9.66 9.66 0 0 0-3.014-7.346"></path>
                </svg>
              </h3>

              <div className="flex flex-col">
                <h4 className="text-lg  font-semibold mb-2">
                  Tag de ped??gio e estacionamento gr??tis
                </h4>

                <p className="text-base opacity-80">
                  Sem pegadinhas: zero mensalidade, zero anuidade e zero taxa de
                  ades??o
                </p>
              </div>
            </div>

            <div>
              <div className="relative inline">
                <motion.span
                  variants={spanHoverVariant}
                  className="relative text-xsuppercase"
                >
                  VER PRODUTO
                </motion.span>
                <motion.hr
                  variants={undelineHoverVariant}
                  className="absolute rounded-lg left-0 -bottom-[6px] w-[25%] h-[0.5px] bg-[#242424]"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[80%] md:w-[90%]">
            <motion.div
              variants={imageUpVariant}
              className="absolute top-52 right-0 w-[50%] md:w-[60%] pt-[90%] md:pt-[110%] md:top-48 lg:top-64"
            >
              <picture>
                <Image
                  src={C6TagBoxAppImg}
                  alt="Cart??o Pink"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  quality={100}
                />
              </picture>
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* EIGHTY ANCHOR */}
      <div
        id="eighty-product"
        className="relative overflow-hidden gradient-2 rounded-lg md:min-h-[300px]"
      >
        <motion.a
          whileHover="hover"
          href="#"
          className="relative overflow-hidden block p-lg h-full"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="md:pb-0 pb-[50%]">
              <h3 className="text-white h-5 mb-6">
                <svg
                  className="w-[120px]"
                  aria-label="Conta Global"
                  role="img"
                  fill="hsla(0, 0%, 98%, 1)"
                  viewBox="0 0 134 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.246 17.336c-1.068-.534-1.869-1.265-2.43-2.22C.28 14.16 0 13.05 0 11.784c0-1.672.38-3.232 1.152-4.652.76-1.419 1.855-2.557 3.26-3.4 1.406-.844 3.05-1.251 4.933-1.251 1.195 0 2.249.183 3.19.548.928.365 1.658.885 2.164 1.56l-.787.73c-1.04-1.194-2.585-1.798-4.651-1.798-1.616 0-3.036.365-4.272 1.11a7.777 7.777 0 0 0-2.867 2.98c-.66 1.25-.998 2.627-.998 4.13 0 1.645.52 2.952 1.56 3.907 1.04.956 2.544 1.448 4.497 1.448 2.122 0 3.808-.618 5.087-1.855l.689.773c-.675.674-1.518 1.194-2.544 1.56-1.026.365-2.122.548-3.316.548-1.504.014-2.783-.253-3.85-.787zM15.036 16.801c-.914-.87-1.377-2.023-1.377-3.485 0-1.307.28-2.487.843-3.527a6.407 6.407 0 0 1 2.347-2.473c.997-.605 2.136-.9 3.4-.9 1.56 0 2.797.436 3.71 1.293.914.857 1.378 2.024 1.378 3.5 0 1.306-.282 2.487-.844 3.54a6.311 6.311 0 0 1-2.346 2.474c-.998.59-2.136.9-3.401.9-1.546-.015-2.783-.45-3.71-1.322zm6.577-.435c.815-.492 1.461-1.195 1.925-2.08.464-.885.703-1.897.703-3.007 0-1.223-.352-2.164-1.069-2.839-.716-.675-1.714-1.012-3.007-1.012-1.026 0-1.953.253-2.768.759a5.235 5.235 0 0 0-1.925 2.094c-.464.885-.703 1.883-.703 2.98 0 1.222.351 2.163 1.068 2.838.717.674 1.714 1.012 3.007 1.012 1.026 0 1.953-.24 2.769-.745zM37.114 7.414c.703.66 1.054 1.56 1.054 2.699 0 .393-.042.815-.126 1.25l-1.321 6.661h-1.096l1.32-6.66c.071-.338.113-.703.113-1.097 0-.913-.28-1.616-.829-2.108-.548-.492-1.349-.745-2.417-.745-1.321 0-2.417.366-3.302 1.11-.886.745-1.462 1.813-1.743 3.233l-1.25 6.253H26.42L28.71 6.5h1.083l-.464 2.193c.548-.759 1.223-1.335 2.038-1.7.815-.38 1.728-.562 2.726-.562 1.307 0 2.319.323 3.021.983zM42.145 14.694a4.12 4.12 0 0 0-.084.815c0 1.096.59 1.644 1.756 1.644.703 0 1.335-.21 1.87-.633l.337.816c-.633.52-1.448.772-2.474.772-.815 0-1.461-.21-1.925-.646-.464-.436-.689-1.026-.689-1.799 0-.309.029-.604.085-.885l1.475-7.322H40.36l.183-.941h2.136l.506-2.516h1.096l-.506 2.516h3.654l-.169.941h-3.654l-1.461 7.238zM59.921 6.515l-2.29 11.509h-1.054l.436-2.248a5.855 5.855 0 0 1-2.08 1.714c-.83.408-1.757.618-2.769.618-1.503 0-2.698-.435-3.597-1.293-.9-.857-1.363-2.023-1.363-3.499 0-1.307.28-2.487.843-3.541a6.343 6.343 0 0 1 2.319-2.473c.997-.59 2.107-.9 3.344-.9 1.195 0 2.178.253 2.951.773.773.52 1.307 1.237 1.588 2.178l.576-2.866h1.096v.028zm-4.764 9.85c.816-.491 1.462-1.194 1.926-2.079.464-.885.702-1.897.702-3.007 0-1.223-.35-2.164-1.068-2.839-.716-.675-1.714-1.012-3.007-1.012-1.026 0-1.953.253-2.768.759a5.236 5.236 0 0 0-1.926 2.094c-.463.885-.702 1.883-.702 2.98 0 1.222.351 2.163 1.068 2.838.717.674 1.714 1.012 3.007 1.012 1.026 0 1.953-.24 2.768-.745zM72.288 9.972h3.85l-1.306 6.507c-.787.604-1.714 1.068-2.768 1.377-1.054.309-2.15.478-3.317.478-1.56 0-2.923-.282-4.09-.844-1.166-.562-2.065-1.363-2.711-2.388-.647-1.026-.956-2.207-.956-3.542 0-1.77.407-3.373 1.236-4.764.83-1.405 1.982-2.501 3.457-3.302 1.49-.787 3.19-1.195 5.116-1.195 3.05 0 5.298.942 6.717 2.839l-3.134 2.473c-.506-.618-1.054-1.054-1.658-1.307-.604-.253-1.321-.38-2.136-.38-1.04 0-1.953.226-2.74.69a4.648 4.648 0 0 0-1.8 1.883c-.42.815-.645 1.728-.645 2.754 0 1.054.35 1.897 1.04 2.53.688.632 1.658.941 2.908.941.745 0 1.434-.127 2.052-.38l.885-4.37zM79.271 1.667h4.188l-3.26 16.357H76.01l3.26-16.357zM85.133 17.546c-.942-.45-1.673-1.082-2.178-1.91-.52-.83-.773-1.786-.773-2.868 0-1.307.309-2.487.941-3.527a6.756 6.756 0 0 1 2.628-2.473c1.124-.59 2.375-.886 3.766-.886 1.265 0 2.361.225 3.303.675.941.45 1.672 1.082 2.178 1.897.52.815.773 1.77.773 2.853 0 1.307-.31 2.487-.942 3.541a6.615 6.615 0 0 1-2.614 2.473c-1.11.605-2.375.9-3.78.9-1.265 0-2.36-.225-3.302-.675zm5.607-3.625c.534-.619.787-1.42.787-2.403 0-.703-.197-1.265-.59-1.673-.394-.407-.942-.618-1.659-.618-.843 0-1.517.31-2.051.928-.534.618-.801 1.419-.801 2.43 0 .703.196 1.265.59 1.659.393.407.941.604 1.658.604.843 0 1.532-.309 2.066-.927zM107.406 6.529c.773.436 1.391 1.068 1.869 1.883.463.83.702 1.785.702 2.88 0 1.308-.295 2.488-.871 3.542-.576 1.054-1.363 1.883-2.361 2.473-.998.605-2.08.9-3.246.9-1.855 0-3.12-.633-3.808-1.897l-.323 1.7h-3.992l3.247-16.343h4.187l-1.054 5.312c.886-.731 1.954-1.097 3.176-1.097.872 0 1.701.211 2.474.647zm-2.46 7.392c.534-.619.787-1.42.787-2.403 0-.703-.196-1.265-.604-1.673-.407-.407-.955-.618-1.658-.618-.843 0-1.518.31-2.052.928-.534.618-.801 1.419-.801 2.43 0 .703.197 1.265.604 1.659.408.408.956.604 1.659.604.857 0 1.545-.309 2.065-.927zM124.578 6.08l-2.375 11.944h-3.963l.239-1.124c-.955.885-2.108 1.32-3.457 1.32a4.89 4.89 0 0 1-2.473-.646c-.773-.435-1.391-1.068-1.855-1.883-.478-.829-.703-1.798-.703-2.909 0-1.293.295-2.459.871-3.513a6.459 6.459 0 0 1 2.361-2.473c.97-.618 2.052-.914 3.233-.914 1.742 0 2.951.549 3.653 1.63l.281-1.433h4.188zm-6.057 7.84c.534-.618.787-1.419.787-2.402 0-.703-.197-1.265-.604-1.673-.408-.407-.956-.618-1.658-.618-.843 0-1.518.31-2.052.928-.534.618-.801 1.419-.801 2.43 0 .703.197 1.265.604 1.659.408.407.956.604 1.659.604.857 0 1.545-.309 2.065-.927zM127.052 1.667h4.188l-3.261 16.357h-4.187l3.26-16.357z"></path>
                </svg>
              </h3>

              <h4 className="text-lg md:text-2xl w-[180px] sm:w-full md:w-[300px] text-white font-semibold mb-2">
                Conta internacional{" "}
                <span className="opacity-80">em d??lar e euro</span>
              </h4>

              <p className="text-base text-white opacity-80 mb-4 md:w-[300px]">
                Fa??a compras no exterior, em lojas f??sicas e on-line, com
                tarifas mais baixas, seguran??a e praticidade
              </p>
            </div>

            <div>
              <div className="relative inline">
                <motion.span
                  variants={spanHoverVariant}
                  className="relative text-xsuppercase text-white"
                >
                  VER PRODUTO
                </motion.span>
                <motion.hr
                  variants={undelineHoverVariant}
                  className="absolute rounded-lg bg-white left-0 -bottom-[6px] w-[25%] h-[0.5px]"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[80%]">
            <motion.div
              variants={imageUpVariant}
              className="absolute top-52 md:top-10 -right-10 w-[80%] pt-[96%] opacity-40"
            >
              <picture>
                <Image
                  src={CartoesContaGlobalImg}
                  alt="Cart??o Pink"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  quality={100}
                />
              </picture>
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* END */}
    </div>
  );
};

export default ProductsForYou;
