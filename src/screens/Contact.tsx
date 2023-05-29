import { content } from "../content";
import PageNotFound from "../components/PageNotFound";

const Contact = () => {
  return (
    <>
      <PageNotFound pageName={content.contact.heading} />
    </>
  );
};

export default Contact;
