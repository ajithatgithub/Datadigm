import SectionLayout from "../../components/SectionLayout";
import styles from "../../styles/Contact/Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <SectionLayout>
        <div className={styles.header}>
          <h1>
            Hey! Lets Talk
            <span> about our next project!</span>
          </h1>
        </div>
      </SectionLayout>
      <SectionLayout>
        <ContactForm />
      </SectionLayout>
    </>
  );
};

export default Contact;
