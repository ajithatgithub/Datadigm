import Image from "next/image";

import styles from "../../styles/Services/ServicesSection.module.css";

import SectionImage from "../../public/images/services/Our_Services.png";
import SectionFeature from "../../components/SectionFeature";

const ServicesSection = ({ list }) => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.grid_left}>
          <div className={styles.header}>
            <h1>Our</h1>
            <span>Services</span>
          </div>
        </div>
        <div className={styles.grid_right}>
          <div className={styles.image_container}>
            <Image src={SectionImage} alt="Our Services" />
          </div>
        </div>
      </div>
      {/* Services Collection */}
      <div className={styles.container}>
        {list &&
          list.map(
            (
              { category, title, description, imagePath, flexDirectionInvert },
              index
            ) => (
              <SectionFeature
                key={index}
                category={category}
                title={title}
                description={description}
                section="services"
                imageSrc={imagePath}
                flexDirectionInvert={flexDirectionInvert}
                boxShadow={false}
              />
            )
          )}
      </div>
    </>
  );
};

export default ServicesSection;
