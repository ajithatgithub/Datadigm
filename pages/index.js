import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hero from "./home/Hero";
import Header from "../components/Header";
import SubHero from "./home/SubHero";
import Expertise from "./home/Expertise";
import Clients from "./home/Clients";
import WhoWeAre from "./home/WhoWeAre";
import Outro from "./home/Outro";
import SectionLayout from "../components/SectionLayout";

const sectionData = [
  {
    category: "Planning",
    title: "Data Strategy Consulting",
    description:
      "Get your data strategy right, implement modernizing Data Platforms, optimize investments with Business intelligence and make business decisions right.",
    imagePath: "1.jpg",
    flexDirectionInvert: false,
  },
  {
    category: "Process",
    title: "Data Engineering Solutions",
    description:
      "Get your data strategy right, implement modernizing Data Platforms, optimize investments with Business intelligence and make business decisions right.",
    imagePath: "2.jpg",
    flexDirectionInvert: true,
  },
  {
    category: "Security",
    title: "Data Quality & Governance",
    description:
      "Get your data strategy right, implement modernizing Data Platforms, optimize investments with Business intelligence and make business decisions right.",
    imagePath: "3.jpeg",
    flexDirectionInvert: false,
  },
  {
    category: "Insights",
    title: "Data Visualization & Insights",
    description:
      "Get your data strategy right, implement modernizing Data Platforms, optimize investments with Business intelligence and make business decisions right.",
    imagePath: "4.jpg",
    flexDirectionInvert: true,
  },
];

export default function Home() {
  const { scroll } = useLocomotiveScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Datadigm</title>
        <meta name="description" content="Datadigm Technology private ltd" />
      </Head>

      {/* Hero */}
      <Hero />
      {/* Sub Hero */}
      <SectionLayout>
        <SubHero />
      </SectionLayout>

      {/* Expertise */}
      <SectionLayout>
        <Expertise sectionData={sectionData} />
      </SectionLayout>
      {/* Clients */}
      <SectionLayout>
        <Clients title="Trusted and partnered with great technology brands" />
      </SectionLayout>
      {/* Who are we ? */}
      <WhoWeAre />
    </div>
  );
}
