import Link from "next/link";
import styles from "../../styles/home/WhoWeAre.module.css";

const portfolioData = [
  {
    num: "180+",
    desc: "experienced consultants globally",
  },
  {
    num: "6",
    desc: "trusted partners",
  },
  {
    num: "30+",
    desc: "projects delivered",
  },
];

const WhoWeAre = () => {
  return (
    <section className={styles.main} data-scroll>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 data-scroll data-scroll-speed="1">
              Who
              <span data-scroll data-scroll-speed="1">
                we are ?
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.body} data-scroll data-scroll-speed="1">
          <div className={styles.portfolio_container}>
            <div className={styles.portfolio_wrapper}>
              <h1 data-scroll data-scroll-speed="1">
                We love partnering with business to help you grow, innovate, and
                succeed
              </h1>
              <p data-scroll data-scroll-speed="1">
                We love partnering with business to help you grow, innovate, and
                succeed
              </p>
              <Link href="/contact">
                <a>
                  <div data-scroll data-scroll-speed="1" className={styles.btn}>
                    Contact Us
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_container}>
            <div
              className={styles.footer_items}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="2"
            >
              {portfolioData.map(({ num, desc }, index) => (
                <div key={index} className={styles.footer_item}>
                  <h1>{num}</h1>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
