const servicesData = [
  {
    category: "Planning",
    title: "Data Strategy Consulting",
    description:
      "We help you transform into a data-driven organization making decisions based on analytics and insights. We enable you to leverage your data better by modernizing your data platforms on-premises or leveraging the cloud data ecosystem. we focus on enabling real-time continuous intelligence for faster and better business decisions",
    imagePath: "1.png",
    flexDirectionInvert: false,
  },
  {
    category: "Process",
    title: "Data Engineering Solutions",
    description:
      "We help you implement a comprehensive data engineering solution to ingest and process data at scale. Our metadata driven data integration solutions covers all aspects of data processing data such as batch, streaming, data quality and data provisioning. We specialize in all leading data engineering technologies in the market across traditional ETL , Big Data and Cloud native tech stacks.",
    imagePath: "2.png",
    flexDirectionInvert: true,
  },
  {
    category: "Security",
    title: "Data Quality & Governance",
    description:
      "Data governance is a collaboration between IT and business to improve the trustworthiness of their data for making business decisions with confidence and also to ensure regulatory compliance. We help you govern your data holistically covering all aspects such Data Profiling, Data quality implementation, Metadata management , Data lineage and Data stewardship.",
    imagePath: "3.png",
    flexDirectionInvert: false,
  },
  {
    category: "Insights",
    title: "Data Visualization & Insights",
    description:
      "We can enable you to deliver canned reports to your user community or empower them with self-service analytics, setting up dashboards with key business metrics for executives. We help you combine any number of data sources from heterogeneous data sources - whether the data is on prem or cloud to provide meaningful business insights in the form of compelling visualization. We also specialize in machine learning and AI to help you derive hidden business insights from your data pile",
    imagePath: "4.png",
    flexDirectionInvert: true,
  },
];

import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import SectionLayout from "../../components/SectionLayout";

const Services = () => {
  return (
    <>
      <HeroSection />
      <SectionLayout>
        <ServicesSection list={servicesData} />
      </SectionLayout>
    </>
  );
};

export default Services;
