import Link from "next/link";

import SectionLayout from "../../components/SectionLayout";
import SectionSplitter from "../../components/SectionSplitter";
import styles from "../../styles/About/About.module.css";
import Clients from "../home/Clients";
import AboutHero from "./AboutHero";
import AboutShowcase from "./AboutShowcase";
import Achievements from "./Achievements";
import ApproachImage from "./ApproachImage";
import StoryImage from "./StoryImage";
import TechTrends from "./TechTrends";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutShowcase />
      {/* Our Story */}
      <SectionLayout>
        <SectionSplitter
          title="Our Story"
          descriptionTop="A digital enterprise based on data has become the norm in every type of organization - from retail and finance to manufacturing and technology. Data is the critical factor for all businesses today - not just to stay alive, but to keep on innovating."
          descriptionBottom="At Datadigm, we help companies master their businesses and maximize their potential through consulting and engineering,
                    while our embedded values ensure that we maintain strong relationships with clients, ensuring growth for all."
        />
      </SectionLayout>
      {/* Image Section */}
      <SectionLayout>
        <StoryImage />
      </SectionLayout>
      {/* Our Approach */}
      <SectionLayout>
        <SectionSplitter
          title="Our Approach"
          descriptionTop="We empower companies to master their businesses and maximize their potential through our consulting and engineering solutions, while our embedded values ensure that we maintain strong bonds with clients, ensuring growth for all."
          descriptionBottom="Our Data-Centric Approach for Visual Analytics helps visualize the data meaningfully with a story while emphasizing clarity, coherence, and pictorial representation of data with interactive applications and dashboards"
        />
      </SectionLayout>
      <SectionLayout>
        <ApproachImage />
      </SectionLayout>
      {/* Our Mission */}
      <SectionLayout>
        <SectionSplitter
          title="Our Mission"
          descriptionTop="As an industry leader in data strategy consulting and an employer of choice, we aim to deliver exceptional value to the stakeholders.  Our team strives to build long-term relationships with our clients by leveraging data and digital technologies to drive game-changing business impact."
          descriptionBottom="Employees are the most important aspect of our organization, and we strive to recruit, develop, and retain the best talent and enable them to reach their full potential"
        />
      </SectionLayout>
      {/* Clients  */}
      <SectionLayout>
        <Clients title="We work with some of the awesome clients around the world" />
      </SectionLayout>

      {/* Tech Trends */}
      <SectionLayout>
        <TechTrends />
      </SectionLayout>

      {/* Achievements */}
      <SectionLayout>
        <Achievements />
      </SectionLayout>
      {/* Join Us */}
      <SectionLayout>
        <div className={styles.joinUs} data-scroll>
          <div className={styles.header}>
            <h1>Be a part of</h1>
            <span>Datadigm</span>
          </div>
          <div className={styles.footer}>
            <Link href="/careers">
              <a>
                -<span>Join Us</span>
              </a>
            </Link>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default About;
