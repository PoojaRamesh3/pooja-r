// import Heading from "../components/Heading";
import PageNotFound from "../components/PageNotFound";
import { content } from "../content";

const Experiences = () => {
  return (
    <>
      {/* <Heading
        heading={content.experiences.heading}
        subHeading={content.experiences.sunheading}
      /> */}
      <PageNotFound pageName={content.experiences.heading} />
    </>
  );
};

export default Experiences;
