import Heading from "../components/Heading";
import { content } from "../content";

const Contact = () => {
  return (
    <>
      <Heading
        heading={content.contact.heading}
        subHeading={content.contact.sunheading}
      />
    </>
  );
};

export default Contact;
