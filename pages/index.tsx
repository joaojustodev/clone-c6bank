import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { motion, Variants } from "framer-motion";
import Header from "../components/Home/Header";
import Header959 from "../components/Home/Header959";
import Nav from "../components/Nav";
import MobileMenu from "../components/MobileMenu";
import Products from "../components/Home/Products";
import Footer from "../components/Footer";
import FirstBlogImg from "../public/static/1.webp";
import SecondBlogImg from "../public/static/2.webp";
import ThirdBlogImg from "../public/static/3.webp";

import { ArrowUpRight } from "phosphor-react";

const undelineHoverVariant: Variants = {
  hover: {
    width: "25%",
    transition: {
      ease: "linear",
    },
  },
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clone C6 Bank</title>
        <meta name="description" content="Clone do site C6 Bank" />
        <link rel="icon" href="https://www.c6bank.com.br/favicon.ico" />
      </Head>
      <main>
        <div>
          <Nav />
          <MobileMenu />
          <Header />
          <Header959 />
        </div>
        <Products />
        <section className="py-12 md:py-20 md:px-12">
          <div className="max-w-containerMd mx-auto px-6">
            <h2 className="text-[28px] md:text-[40px] mb-20 font-bold">
              Sem tarifas:{" "}
              <span className="font-normal md:block">
                economize seu dinheiro
              </span>
            </h2>
            <ul className="flex gap-12 sm:-mx-6 md:-mx-12 flex-col sm:gap-0 sm:grid sm:grid-cols-2 md:grid-cols-3">
              <li className=" sm:px-6 sm:mb-20 md:px-12">
                <div className="flex flex-col gap-4">
                  <span>
                    <svg
                      className="w-[25px] h-[25px]"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92L4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z"></path>
                    </svg>
                  </span>
                  <p className="font-bold text-base">
                    Conta e cartão gratuitos
                  </p>
                  <p className="text-base">
                    Ter uma conta no C6 Bank não custa nada. A conta é digital e
                    sem tarifa de manutenção.
                  </p>
                </div>
              </li>
              <li className=" sm:px-6 sm:mb-20 md:px-12">
                <div className="flex flex-col gap-4">
                  <span>
                    <svg
                      className="w-[25px] h-[25px]"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                    </svg>
                  </span>
                  <p className="font-bold text-base">Saque sem tarifa</p>
                  <p className="text-base">
                    Saque dinheiro gratuitamente em qualquer caixa da rede
                    Banco24Horas e Saque e Pague.
                  </p>
                </div>
              </li>
              <li className=" sm:px-6 sm:mb-20 md:px-12">
                <div className="flex flex-col gap-4">
                  <span>
                    <svg
                      className="w-[25px] h-[25px]"
                      aria-hidden="true"
                      width="22"
                      height="28"
                      viewBox="0 0 22 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.833 16.333h16.334l-1.75-5.25H4.583l-1.75 5.25zm14.584 5.834a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm-12.834 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM19.073 10.5l2.427 7v9.333A1.167 1.167 0 0 1 20.333 28h-1.166A1.167 1.167 0 0 1 18 26.833v-1.166H4v1.166A1.167 1.167 0 0 1 2.833 28H1.667A1.167 1.167 0 0 1 .5 26.833V17.5l2.427-7a1.76 1.76 0 0 1 1.656-1.167h12.834c.758 0 1.423.49 1.656 1.167zM11 0c2.473 0 4.842 1.003 6.592 2.742l-1.657 1.656A7.018 7.018 0 0 0 11 2.333a7.018 7.018 0 0 0-4.935 2.065L4.42 2.742A9.328 9.328 0 0 1 11 0zm0 4.667c1.237 0 2.415.513 3.29 1.376L12.633 7.7A2.326 2.326 0 0 0 11 7c-.583 0-1.202.268-1.633.7L7.71 6.043C8.585 5.18 9.763 4.667 11 4.667z"
                        fill="#242424"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-bold text-base">
                    Tag de pedágio e estacionamento
                  </p>
                  <p className="text-base">
                    Economize tempo e dinheiro com o C6 Tag, nosso tag de
                    pedágio e estacionamento sem mensalidade.
                  </p>
                </div>
              </li>
              <li className=" sm:px-6 sm:mb-20 md:px-12">
                <div className="flex flex-col gap-4">
                  <span>
                    <svg
                      className="w-[25px] h-[25px]"
                      aria-hidden="true"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.013 12.21H5.898L4.191 15H.946L9.443 1.977h3.001L15.67 15h-3.038l-.619-2.79zm-.506-2.289L10.4 4.898 7.304 9.92h4.202zM6.5 0 4.576 2.572h3.233L9.726 0H6.5z"
                        fill="#242424"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-bold text-base">
                    Programa de pontos sem custo
                  </p>
                  <p className="text-base">
                    Acumule pontos sem gastar com mensalidade ou custo de
                    participação.
                  </p>
                </div>
              </li>
              <li className=" sm:px-6 sm:mb-20 md:px-12">
                <div className="flex flex-col gap-4">
                  <span>
                    <svg
                      className="w-[25px] h-[25px]"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
                    </svg>
                  </span>
                  <p className="font-bold text-base">Taxa zero para investir</p>
                  <p className="text-base">
                    Invista em renda fixa e variável sem taxa de corretagem e
                    custódia.
                  </p>
                </div>
              </li>
              <li className=" sm:px-6 sm:mb-20 md:px-12">
                <div className="flex flex-col gap-4">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="swap_horiz">
                        <g id="24H" fill="#242424">
                          <path d="M10.385 18.857H2.413V17l3.66-4.655c.465-.644.806-1.208 1.023-1.691.223-.49.334-.957.334-1.403 0-.601-.105-1.072-.316-1.413-.204-.34-.502-.51-.892-.51-.427 0-.768.198-1.022.594-.248.396-.371.954-.371 1.672h-2.64c0-.83.171-1.588.512-2.276a3.86 3.86 0 0 1 1.45-1.598c.625-.384 1.331-.576 2.118-.576 1.208 0 2.143.334 2.806 1.003.669.663 1.003 1.608 1.003 2.834 0 .762-.186 1.536-.557 2.323-.366.78-1.032 1.744-1.998 2.89l-1.737 2.48h4.599v2.184zM18.97 13.747h1.152v2.183H18.97v2.927h-2.63V15.93h-4.478l-.12-1.7 4.59-8.901h2.638v8.418zm-4.673 0h2.044V9.222l-.056.102-1.988 4.423zM31.356 18.857h-2.723V13.07h-4.032v5.788h-2.732V5.33h2.732V10.8h4.032V5.33h2.723v13.528z"></path>
                        </g>
                        <mask
                          id="mask0_49_2825"
                          maskUnits="userSpaceOnUse"
                          x="1"
                          y="5"
                          width="22"
                          height="14"
                        >
                          <path
                            id="icon"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m4.421 11.855-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.32.85.09.85-.35v-1.8h7.725c.55 0 1-.45 1-1s-.45-1-1-1H5.27v-1.79c0-.45-.54-.67-.85-.35zm17.939-3.21-2.78-2.79c-.31-.32-.85-.09-.85.35v1.79h-7.734c-.55 0-1 .45-1 1s.45 1 1 1h7.724v1.79c0 .45.54.67.85.35l2.78-2.79c.2-.19.2-.51.01-.7z"
                            fill="#fff"
                          ></path>
                        </mask>
                      </g>
                    </svg>
                  </span>
                  <p className="font-bold text-base">Atendimento 24h</p>
                  <p className="text-base">
                    Conte com a gente 24h por dia, 7 dias por semana pelo chat
                    do app.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-20 md:px-12 bg-gray-50">
          <div className="max-w-containerLg mx-auto px-6">
            <h2 className="text-[28px] md:text-[40px] md:w-[70%] font-bold mb-20">
              Blog do C6 Bank:{" "}
              <span className="font-normal">
                novidades, produtos e educação financeira em um só canal
              </span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {/* FIRST ANCHOR  */}
              <div className="sm:max-w-[400px] w-full bg-white border-b-2 border-yellow-500 group">
                <motion.a whileHover="hover" href="#">
                  <div className="relative overflow-hidden max-h-[210px]">
                    <div className="relative overflow-hidden">
                      <div className="w-full pb-[49%]"></div>
                      <Image
                        src={FirstBlogImg}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        quality={100}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col pt-4 px-4 mb-4">
                    <span className="text-xs uppercase font-thin  before:inline-block before:content-[''] before:w-[1.5px] before:h-[7px] before:mr-3 before:bg-yellow-500">
                      Novidades
                    </span>
                    <p className="text-lg font-bold mt-2 mb-4">
                      C6 Experience: Complete desafios, suba de nível e garanta
                      recompensas exclusivas
                    </p>
                    <div className="relative">
                      <span className="flex items-center gap-2 text-xs uppercase">
                        SAIBA MAIS
                        <ArrowUpRight className="hidden group-hover:block" />
                      </span>
                      <motion.div
                        variants={undelineHoverVariant}
                        className="absolute -bottom-[2px] bg-black w-[4%] h-[1.5px]"
                      />
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* SECOND ANCHOR  */}
              <div className="sm:max-w-[400px] w-full bg-white border-b-2 border-yellow-500">
                <motion.a whileHover="hover" href="#" className="group">
                  <div className="relative overflow-hidden max-h-[210px]">
                    <div className="relative overflow-hidden">
                      <div className="w-full pb-[49%]"></div>
                      <Image
                        src={SecondBlogImg}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        quality={100}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col pt-4 px-4 mb-4">
                    <span className="text-xs uppercase font-thin  before:inline-block before:content-[''] before:w-[1.5px] before:h-[7px] before:mr-3 before:bg-yellow-500">
                      Economia
                    </span>
                    <p className="text-lg font-bold mt-2 mb-4">
                      C6 Experience: Complete desafios, suba de nível e garanta
                      recompensas exclusivas
                    </p>
                    <div className="relative">
                      <span className="flex items-center gap-2 text-xs uppercase">
                        SAIBA MAIS
                        <ArrowUpRight className="hidden group-hover:block" />
                      </span>
                      <motion.div
                        variants={undelineHoverVariant}
                        className="absolute -bottom-[2px] bg-black w-[4%] h-[1.5px]"
                      />
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* THIRD ANCHOR  */}
              <div className="sm:max-w-[400px] w-full bg-white border-b-2 border-yellow-500">
                <motion.a whileHover="hover" href="#" className="group">
                  <div className="relative overflow-hidden max-h-[210px]">
                    <div className="relative overflow-hidden">
                      <div className="w-full pb-[49%]"></div>
                      <picture>
                        <Image
                          src={ThirdBlogImg}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          className="w-full h-full"
                          placeholder="blur"
                          quality={100}
                        />
                      </picture>
                    </div>
                  </div>

                  <div className="flex flex-col pt-4 px-4 mb-4">
                    <span className="text-xs uppercase font-thin  before:inline-block before:content-[''] before:w-[1.5px] before:h-[7px] before:mr-3 before:bg-yellow-500">
                      Produtos
                    </span>
                    <p className="text-lg font-bold mt-2 mb-4">
                      C6 Experience: Complete desafios, suba de nível e garanta
                      recompensas exclusivas
                    </p>
                    <div className="relative">
                      <span className="flex items-center gap-2 text-xs uppercase">
                        SAIBA MAIS
                        <ArrowUpRight className="hidden group-hover:block" />
                      </span>
                      <motion.div
                        variants={undelineHoverVariant}
                        className="absolute -bottom-[2px] bg-black w-[4%] h-[1.5px]"
                      />
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
