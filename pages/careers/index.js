import SectionLayout from "../../components/SectionLayout";
import HeroCareers from "./HeroCareers";
import SectionIntro from "./SectionIntro";
import SectionHighlight from "../../components/SectionHighlight";
import Team from "./Team";
import JobSection from "./JobSection";

const Careers = () => {
  return (
    <>
      <HeroCareers />
      {/* Section Into</> */}
      <SectionLayout>
        <SectionIntro
          titleT="Our"
          titleB="Culture"
          section="careers"
          imagePath="OurCulture.png"
        />
      </SectionLayout>
      {/* Our Culture Intro */}
      <SectionHighlight />

      {/* Our Team */}
      <SectionLayout>
        <Team />
      </SectionLayout>

      {/* Job Opening */}
      <SectionLayout>
        <JobSection />
      </SectionLayout>
    </>
  );
};

export default Careers;
