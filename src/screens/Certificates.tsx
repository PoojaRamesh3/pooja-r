import { content } from "../content";
import PageNotFound from "../components/PageNotFound";

const Certificates = () => {
  return (
    <>
      <PageNotFound pageName={content.certificates.heading} />
    </>
  );
};

export default Certificates;
