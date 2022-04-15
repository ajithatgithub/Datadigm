import Image from "next/image";
import styles from "../../styles/home/Clients.module.css";

// import Clients_1 from "../../public/images/clients/1.png";
// import Clients_2 from "../../public/images/clients/2.png";
// import Clients_3 from "../../public/images/clients/3.png";
// import Clients_4 from "../../public/images/clients/4.png";
// import Clients_5 from "../../public/images/clients/5.png";
// import Clients_6 from "../../public/images/clients/6.png";
// import Clients_7 from "../../public/images/clients/7.png";
// import Clients_8 from "../../public/images/clients/8.png";

const clientData = [
  {
    name: "Borg",
    imagepath: "1_ccexpress.png",
  },
  {
    name: "Borg",
    imagepath: "2.png",
  },
  {
    name: "Borg",
    imagepath: "6_ccexpress.png",
  },
  {
    name: "Borg",
    imagepath: "5.png",
  },
  {
    name: "Borg",
    imagepath: "3_ccexpress.png",
  },
  {
    name: "Borg",
    imagepath: "7_ccexpress.png",
  },
  {
    name: "Borg",
    imagepath: "8.png",
  },
  {
    name: "Borg",
    imagepath: "4.png",
  },
];

const Clients = ({ title }) => {
  return (
    <>
      <div className={styles.header}>
        <h1 data-scroll data-scroll-speed="1">
          {title}
        </h1>
      </div>
      <div
        className={styles.body}
        data-scroll
        data-scroll-speed="1"
        // data-scroll-delay="0.01"
      >
        <div className={styles.list}>
          {clientData.map(({ imagepath }, index) => (
            <div className={styles.list_item} key={index}>
              <div className={styles.image_container}>
                <Image
                  src={require(`../../public/images/clients/${imagepath}`)}
                  alt="clients"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
