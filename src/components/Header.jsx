import LOGO from "/logo.svg";
import DOT from "/blue-dot.svg";

export default function Header() {
  return (
    <header className="">
      <div className="flex my-29 max-h-16 mx-100 2xl:mx-auto justify-between max-w-1440">
        <img src={LOGO} alt="Sinar Education Logo" />
        <nav className="my-5 max-w-584">
          <ul className="flex font-Poppins text-base font-normal gap-52 text-at-gray-100">
            <li className="text-at-primary-blue flex flex-col">
              Home
              <span className="mx-auto my-2">
                <img src={DOT} alt="Hover blue dot" />
              </span>
            </li>
            <li>Courses</li>
            <li>Discover</li>
            <li>Live lessons</li>
            <li>My content</li>
          </ul>
        </nav>
        <div className="flex font-Poppins text-base my-2.5 font-normal text-at-primary-blue gap-24">
          <button>Log in</button>
          <button className="py-2.5 px-5 border bg-at-white-50 rounded-10 border-at-white-100 shadow-dropShadow  ">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
