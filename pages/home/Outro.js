import styles from "../../styles/home/Outro.module.css";
import Link from "next/link";

const FooterSection = [
  {
    title: "Company",
    list: [
      { label: "About Us", link: "/about" },
      { label: "Careers", link: "/careers" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
  {
    title: "Services",
    list: [
      { label: "Our Services", link: "/services" },
      { label: "Case Studies", link: "/posts" },
      { label: "Success Stories", link: "/posts" },
    ],
  },
  {
    title: "Legal",
    list: [
      { label: "Privacy Policy", link: "/" },
      { label: "Terms & Conditions", link: "/" },
    ],
  },
];

const Outro = () => {
  return (
    <footer className={styles.main} data-scroll>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.grid_left}>
              <div className={styles.wrapper}>
                <h1>Datadigm</h1>
                <div className={styles.social}>
                  <div className={styles.social_item}>
                    <p>FaceBook</p>
                  </div>
                  <div className={styles.social_item}>
                    <p>LinkedIn</p>
                  </div>
                  <div className={styles.social_item}>
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.grid_right}>
              <div className={styles.section_wrapper}>
                <div className={styles.section_items}>
                  {FooterSection.map(({ title, list }, index) => (
                    <div className={styles.section_item} key={index}>
                      <div className={styles.section_item_title}>
                        <h5>{title}</h5>
                      </div>
                      <div className={styles.section_list_items}>
                        {list.map(({ label, link }, index) => (
                          <div key={index} className={styles.section_list_item}>
                            <Link href={link}>
                              <a>{label}</a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Outro;
