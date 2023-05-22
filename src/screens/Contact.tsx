// import Heading from "../components/Heading";
import { content } from "../content";
import PageNotFound from "../components/PageNotFound";

const Contact = () => {
  return (
    <>
      {/* <Heading
        heading={content.contact.heading}
        subHeading={content.contact.sunheading}
      /> */}
      <PageNotFound pageName={content.contact.heading} />
    </>
  );
};

export default Contact;
