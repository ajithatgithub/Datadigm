import { useState } from "react";

import styles from "../../styles/About/CarouselContainer.module.css";

const carouselData = [
  {
    id: 1,
    title: "Data Platform migration for a Global sports apparel brand",
    description:
      "Migrated Data warehouse implementation from Teradata to Snowflake for accelerated decision making through improvement in the performance of market-facing reports and cost optimization through cloud",
    link: "/posts/1",
    feature: [
      {
        title: "Faster Report Generation",
        desc: "All 28 market reports processed within 22 hours avoiding any load delays",
      },
      {
        title: "Better cost management",
        desc: "Pay for only what they use from the cloud service",
      },
      {
        title: "Breakup Analysis",
        desc: "Yearly spend breakup analysis of target state",
      },
    ],
  },
  {
    id: 2,
    title: "Strategy Consulting for a Leading Investment Bank",
    description:
      "Assessment of the business case for the On-Premise to Azure Cloud Migration and define the Data Strategy and Target Architecture",
    link: "/posts/2",
    feature: [
      {
        title: "Tech Recommendations",
        desc: "Solution layer with the preferred tool of choice",
      },
      {
        title: "Cost-Benefit Analysis",
        desc: "Cost-benefit analysis - of current and target state architecture",
      },
      {
        title: "Breakup Analysis",
        desc: "Yearly spend breakup analysis of target state",
      },
    ],
  },
  {
    id: 3,
    title: "Large transformation of a leading P&C Insurance Firm",
    description:
      "Build a “Next-Gen data platform on the cloud” to bring in a better customer experience",
    link: "/posts/3",
    feature: [
      {
        title: "11% reduction of customer churn",
        desc: "11% reduction of customer churn - through better customer analytics",
      },
      {
        title: "Reduced Total Cost of Ownership (TCO)",
        desc: "with the movement of data to the cloud",
      },
      {
        title: "Breakup Analysis",
        desc: "Yearly spend breakup analysis of target state",
      },
    ],
  },
  {
    id: 4,
    title: "Modernization and decision-making in a leading US media company",
    description:
      "Modernization and decision-making in a leading US media company",
    link: "/posts/4",
    feature: [
      {
        title: "4X Faster report generation",
        desc: " - for most of the data loads and reports",
      },
      {
        title: "Close integration with Snowflake",
        desc: "Engineering connect with Snowflake to evaluate new features and Azure integration",
      },
      {
        title: "Consumer Marketing Analytics",
        desc: "with ingestion of additional sources of data such as Social Media Sources for Analytics",
      },
    ],
  },
];

const CarouselItem = ({ title, description, link, feature, selected }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={selected ? styles.featureBody : styles.featureHide}>
        {feature.map(({ title, desc }, index) => (
          <div className={styles.feature} key={index}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselContainer = () => {
  const [select, setSelect] = useState(1);
  return (
    <div className={styles.grid}>
      {carouselData.map(({ title, description, link, feature }, index) => (
        <div
          key={index}
          className={
            select === index + 1
              ? `${styles.gridItem} ${styles.select}`
              : `${styles.gridItem}`
          }
          onClick={() => setSelect(index + 1)}
        >
          <CarouselItem
            title={title}
            description={description}
            feature={feature}
            selected={select === index + 1 ? true : false}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselContainer;
