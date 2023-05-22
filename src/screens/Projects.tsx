import Heading from "../components/Heading";
import { content } from "../content";

const Projects = () => {
  return (
    <>
      <Heading
        heading={content.projects.heading}
        subHeading={content.projects.sunheading}
      />
    </>
  );
};

export default Projects;
