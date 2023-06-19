import Heading from "../components/Heading";
import TabList from "../components/TabList";
import { content } from "../content";

const Skills = () => {
  return (
    <>
      <Heading
        heading={content.skills.heading}
        subHeading={content.skills.subheading}
      />
      <TabList />
    </>
  );
};

export default Skills;
