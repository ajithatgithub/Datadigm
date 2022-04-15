import styles from "../../styles/home/Expertise.module.css";

import Feature from "../../components/Feature";

const Expertise = ({ sectionData }) => {
  return (
    <>
      <div className={styles.header}>
        <h1 data-scroll data-scroll-speed="1" data-scroll-delay="0.01">
          Our{" "}
          <span data-scroll data-scroll-speed="1" data-scroll-delay="0.01">
            Expertise
          </span>
        </h1>
      </div>
      <div className={styles.bg}></div>
      <div className={styles.items}>
        {sectionData &&
          sectionData.map(
            (
              { category, title, description, imagePath, flexDirectionInvert },
              index
            ) => (
              <Feature
                key={index}
                category={category}
                title={title}
                description={description}
                section="expertise"
                imageSrc={imagePath}
                flexDirectionInvert={flexDirectionInvert}
              />
            )
          )}
        {/* <Feature
              category="Planning"
              title="Data Strategy Consulting"
              description="Get your data strategy right, implement modernizing Data
                Platforms, optimize investments with Business intelligence and
                make business decisions right."
              imageSrc="1.jpg"
              flexDirectionInvert={false}
            />
            <Feature
              category="Process"
              title="Data Engineering Solutions"
              description="Get your data strategy right, implement modernizing Data
                Platforms, optimize investments with Business intelligence and
                make business decisions right."
              imageSrc="2.jpg"
              flexDirectionInvert={true}
            />
            <Feature
              category="Security"
              title="Data Quality & Governance"
              description="Get your data strategy right, implement modernizing Data
                Platforms, optimize investments with Business intelligence and
                make business decisions right."
              imageSrc="3.jpeg"
              flexDirectionInvert={false}
            />
            <Feature
              category="Insights"
              title="Data Visualization 
              & Insights"
              description="Get your data strategy right, implement modernizing Data
                Platforms, optimize investments with Business intelligence and
                make business decisions right."
              imageSrc="4.jpg"
              flexDirectionInvert={true}
            /> */}

        {/* <div className={styles.item}>
              <div className="expertise-item-grid">
                <div className="expertise-item-grid-left">
                  <div className="expertise-item-wrapper">
                    <div className="expertise-item-category">Planning</div>
                    <div className="expertise-item-title">
                      Data Quality & Governance
                    </div>
                    <div className="expertise-item-description">
                      Get your data strategy right, implement modernizing Data
                      Platforms, optimize investments with Business intelligence
                      and make business decisions right.
                    </div>
                    <div className="expertise-item-btn">Learn More</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div>Image Container</div>
                </div>
              </div>
            </div>
            <div className="expertise-item-data-visualization">
              <div className="expertise-item-grid">
                <div className="expertise-item-grid-left">
                  <div className="expertise-item-wrapper">
                    <div className="expertise-item-category">Planning</div>
                    <div className="expertise-item-title">
                      Data Visualization & Insights
                    </div>
                    <div className="expertise-item-description">
                      Get your data strategy right, implement modernizing Data
                      Platforms, optimize investments with Business intelligence
                      and make business decisions right.
                    </div>
                    <div className="expertise-item-btn">Learn More</div>
                  </div>
                </div>
                <div className="expertise-item-grid-right">
                  <div>Image Container</div>
                </div>
              </div>
            </div> */}
      </div>
    </>
  );
};

export default Expertise;
