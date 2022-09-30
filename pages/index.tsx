import type { NextPage } from "next";
import Head from "next/head";
import { Content } from "./components/content/Content";
import { Menu } from "./components/menu/Menu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IDS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <Content />
      </main>
    </div>
  );
};

export default Home;
