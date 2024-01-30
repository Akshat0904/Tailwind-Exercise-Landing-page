import LOGO from "/logo.svg";
import DOT from "/blue-dot.svg";
import HAMBURGER from "/hamburger.svg";

const Header = () => {
  return (
    <header className="max-h-123 py-29 border-b border-at-primary-blue ">
      <div className="flex max-h-16 mx-4 md:mx-5 lg:mx-100 2xl:mx-auto justify-between max-w-1440">
        <img src={LOGO} alt="Sinar Education Logo" />
        <nav className="my-5 max-w-584 hidden md:block">
          <ul className="flex font-Poppins text-base font-normal gap-4 lg:gap-29 xl:gap-52 text-at-gray-100">
            <li className="text-at-primary-blue flex flex-col">
              <span className="mx-auto">
                <a href="#">Home</a>
                <img src={DOT} className="mx-auto my-2" alt="Hover blue dot" />
              </span>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Live lessons</a>
            </li>
            <li>
              <a href="#">My content</a>
            </li>
          </ul>
        </nav>
        <div className="md:flex font-Poppins text-base my-2.5 font-normal text-at-primary-blue gap-2 lg:gap-24 hidden">
          <button>Log in</button>
          <button className="py-2.5 px-5 border rounded-lg bg-at-white-50  border-at-white-100 shadow-white-bottom-shadow">
            Sign up
          </button>
        </div>
        <div className="md:hidden my-auto">
          <img src={HAMBURGER} alt="Hamburger icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
