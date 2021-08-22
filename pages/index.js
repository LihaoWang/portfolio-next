import Head from "next/head";
import Image from "next/image";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Leo Wang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div className="main">
        <TopBar />
        <Banner />
        <About />
        <Project />

        <Contact />
      </div>
    </div>
  );
}
