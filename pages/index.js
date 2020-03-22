import Head from "next/head";
import Layout from "../components/layout";
import PortfolioCard from "../components/portfolioCard";

const projects = [
  {
    title: "cooknbook",
    img: {
      url: "/assets/images/cooknbook.png",
      alt: "cooknbook screenshot"
    },
    description: `Developed for the first project week for the ESMT Berlin
    Coding Bootcamp. Working in a team of 3 and using GitHub to
    track issues and assign work. Cooknbook queries three
    different APIs to retrieve nearby restaurants, display them
    on a map and display alternative recipe ideas (in case
    you're on a budget!).`,
    repo: "https://github.com/dnedaniele/cooknbook.git",
    deploy: "https://dnedaniele.github.io/cooknbook/"
  },
  {
    title: "cooknbook",
    img: {
      url: "/assets/images/cooknbook.png",
      alt: "cooknbook screenshot"
    },
    description: "",
    repo: "https://github.com/dnedaniele/cooknbook.git",
    deploy: "https://dnedaniele.github.io/cooknbook/"
  },
  {
    title: "cooknbook",
    img: {
      url: "/assets/images/cooknbook.png",
      alt: "cooknbook screenshot"
    },
    description: "",
    repo: "https://github.com/dnedaniele/cooknbook.git",
    deploy: "https://dnedaniele.github.io/cooknbook/"
  }
];

const Home = () => (
  <Layout>
    <Head>
      <title>pfdzm::home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Home</h1>
    <p>Hello there!</p>

    <h2>Projects</h2>
    <div
      className="projectContainer"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {projects.map(proj => (
        <PortfolioCard
          {...proj}
          key={proj.title + proj.deploy.length + Math.random().toString()}
        />
      ))}
    </div>
  </Layout>
);

export default Home;
