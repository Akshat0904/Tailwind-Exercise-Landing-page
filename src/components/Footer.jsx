import LOGO_LEFT_ALIGNED from "/logo-align-left.svg";
import LOGO from "/logo.svg";

const Footer = () => {
  return (
    <footer className="pb-59">
      <div className="max-w-976 mx-38 md:mx-50 lg:mx-auto my-8 flex flex-col sm:flex-row gap-6 sm:gap-50 lg:gap-83 font-Poppins max-sm:justify-center max-sm:items-center">
        <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-1 sm:gap-20">
          <img
            className="max-w-136 hidden sm:block"
            src={LOGO_LEFT_ALIGNED}
            alt="Left aligned logo"
          />
          <img
            className="max-w-136 block sm:hidden"
            src={LOGO}
            alt="Left aligned logo"
          />
          <p className="max-w-279 h-60 text-at-gray-300 text-xs sm:text-sm font-medium text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur. Sagittis facilisi nunc vitae
            morbi odio.
          </p>
        </div>
        <div className="hidden md:flex gap-30 lg:gap-60">
          <div className="flex flex-col gap-6 ">
            <p className="text-at-primary-blue text-base leading-22 font-medium">
              About
            </p>
            <div className="flex flex-col gap-3 text-at-gray-300 text-base leading-22 font-medium">
              <p>FAQ</p>
              <p>Company</p>
              <p>Quality</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <p className="text-at-primary-blue text-base leading-22 font-medium">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-at-gray-300 text-base leading-22 font-medium">
              <p>Email</p>
              <p className="">Phone No</p>
              <p>Website</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:justify-center max-sm:items-center">
          <p className="text-at-gray-300 text-base sm:text-xl font-medium md:mb-[4px]">
            Subscribe For Updates
          </p>
          <div className="w-314 h-62 border rounded-12 bg-at-blue-50 flex justify-between">
            <p className="w-44 h-22 my-auto ml-20 text-at-gray-400 text-base leading-22 ">
              Email
            </p>
            <button className="text-base leading-22 font-medium p-20 rounded-12 bg-at-primary-blue text-at-white-50 shadow-blue-button-shadow">
              Subscribe
            </button>
          </div>
          <p className="max-w-305 text-at-gray-300 text-xs leading-18 font-medium ">
            by subscribing you will be able to hear the latest news and
            technology updates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
