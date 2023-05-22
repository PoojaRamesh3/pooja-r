import Heading from "../components/Heading";
import ImageCard from "../components/ImageCard";
import { content } from "../content";

const Projects = () => {
  return (
    <>
      <Heading
        heading={content.projects.heading}
        subHeading={content.projects.sunheading}
      />
      <ImageCard />
    </>
  );
};

export default Projects;
