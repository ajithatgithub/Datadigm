import styles from "../../styles/Services/Services.module.css";

const Services = ({ sectionData }) => {
  return (
    <section className={styles.main} data-scroll-section>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>
              Our <span>Serices</span>
            </h1>
          </div>
          <div className={styles.bg}></div>
          <div className={styles.items}>
            {sectionData &&
              sectionData.map(
                (
                  {
                    category,
                    title,
                    description,
                    imagePath,
                    flexDirectionInvert,
                  },
                  index
                ) => (
                  <Feature
                    key={index}
                    category={category}
                    title={title}
                    description={description}
                    section="services"
                    imageSrc={imagePath}
                    flexDirectionInvert={flexDirectionInvert}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
