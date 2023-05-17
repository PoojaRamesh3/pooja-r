import Heading from "../components/Heading";
import TabList from "../components/TabList";
import data from "../data";

const Skills = () => {
  return (
    <>
      <Heading heading={data.skills.heading} />
      <TabList />
    </>
  );
};

export default Skills;
