import { content } from "../content";

const Card = (props: any) => {
  return (
    <>
      {content.skills.tabs[0].info?.map((item, index) => {
        return (
          <div className="flex" key={index}>
            <div>
              <img src={item.logo} alt="" />
            </div>
            <div className="flex">
              <div>{item.language}</div>
              <div>{item.level}</div>
            </div>
          </div>
        );
      })}

      {/* {content.skills.tabs.info[0].map((item, index) => (
          <div className="flex">
            <div>
              <img src="" alt="" />
            </div>
            <div className="flex">
              <div></div>
              <div></div>
            </div>
          </div>
        ))} */}
    </>
  );
};

export default Card;
