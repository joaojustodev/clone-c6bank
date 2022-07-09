import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header959 from "../components/Header959";

import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clone C6 Bank</title>
        <meta name="description" content="Clone do site C6 Bank" />
        <link rel="icon" href="https://www.c6bank.com.br/favicon.ico" />
      </Head>
      <main className="min-h-[150vh]">
        <div className="flex flex-1 flex-col">
          <Nav />
          <Header959 />
        </div>
      </main>
    </div>
  );
};

export default Home;
