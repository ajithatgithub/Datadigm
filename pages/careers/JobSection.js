import styles from "../../styles/Careers/JobSection.module.css";

const JobsData = [
  {
    id: 1,
    jobTitle: "Architect - Azure",
    jobType: "Full-Time",
    jobLocation: "Remote, Chennai, Pune",
  },
  {
    id: 2,
    jobTitle: "Architect - Azure",
    jobType: "Full-Time",
    jobLocation: "Remote, Chennai, Pune",
  },
  {
    id: 3,
    jobTitle: "Architect - Azure",
    jobType: "Full-Time",
    jobLocation: "Remote, Chennai, Pune",
  },
];

const Jobs = ({ jobTitle, jobType, jobLocation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.jobsMain}>
        <div className={styles.title}>{jobTitle}</div>
        <div className={styles.type}>{jobType}</div>
        <div className={styles.location}>{jobLocation}</div>
      </div>
      <div className={styles.hoverPart}>
        <div className={styles.btn}>Apply</div>
        <div className={styles.btn}>Share</div>
      </div>
    </div>
  );
};

const JobSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Check out our current openings to see what we have available </h1>
      </div>
      <div className={styles.body}>
        <div className={styles.btn}>Explore Jobs</div>
      </div>
      <div className={styles.footer}>
        {JobsData.map(({ jobTitle, jobType, jobLocation }, index) => (
          <Jobs
            key={index}
            jobTitle={jobTitle}
            jobType={jobType}
            jobLocation={jobLocation}
          />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
