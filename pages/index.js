import Head from "next/head";
import Image from "next/image";

import Nav from "../components/Nav";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import TopBar from "../components/TopBar";
import { ToggleProvider, useToggle, useTheme } from "../ToggleContext";

export default function Home() {
  const toggle = useToggle();
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? "dark" : ""}>
      <Head>
        <title>Leo Wang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          property="og:title"
          content="Lihao Wang's Portfolio"
        />
        <meta name="image" property="og:image" content="link-thumbnail.png" />
      </Head>

      <Nav />
      <div className={`main ${toggle ? "active" : ""}`}>
        <TopBar />
        <Banner />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
