import Heading from "../components/Heading";
import TabList from "../components/TabList";
import { content } from "../content";

const Skills = () => {
  return (
    <>
      <Heading
        heading={content.skills.heading}
        subHeading={content.skills.sunheading}
      />
      <TabList />
    </>
  );
};

export default Skills;
