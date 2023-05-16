import data from "../context";

const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full justify-between">
        <div>
          <a href="/">{data.name}</a>
        </div>
        <div>
          <ul className="flex w-full justify-between">
            {data.navbar.map((item, index) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
