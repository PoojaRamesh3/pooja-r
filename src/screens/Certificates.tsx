import { content } from "../content";
import Heading from "../components/Heading";
import Card from "../components/Card";

const Certificates = () => {
  return (
    <>
      <Heading
        heading={content.certificates.heading}
        subHeading={content.certificates.subheading}
      />
      <Card />
    </>
  );
};

export default Certificates;
