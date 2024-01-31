import CUBE from "/three-cube.svg";
import NumberData from "./NumberData.jsx";

const FourthSection = () => {
  return (
    <section className="bg-at-white-50 border-33 shadow-white-section-shadow  ">
      <div className="max-w-1440 mx-auto py-44 flex flex-col gap-8 md:gap-78">
        <div className="px-20 md:px-225 flex flex-col justify-center items-center">
          <h2 className="font-Poppins text-at-primary-blue text-2xl md:text-[45px] text-center md:leading-52 font-semibold">
            Everything is Achievement
          </h2>
          <p className="max-w-792 font-Poppins mt-7 font-normal text-xs md:text-base text-center text-at-gray-300 ">
            Lorem ipsum dolor sit amet consectetur. Nulla vel nec morbi donec
            senectus pulvinar quis. Id dolor orci justo sit a auctor morbi dolor
            suscipit.
          </p>
        </div>
        <div className="flex px-4 md:px-0 gap-4 md:gap-44 justify-center items-center flex-wrap lg:flex-nowrap">
          <NumberData number="3000+" service="Learners" />
          <img
            className="size-44 md:size-66"
            src={CUBE}
            alt="Three cubes image"
          />
          <NumberData number="100+" service="Courses" />
          <img
            className="hidden sm:block size-44 md:size-66"
            src={CUBE}
            alt="Three cubes image"
          />
          <NumberData number="25+" service="Year of service" />
          <img
            className="size-44 md:size-66"
            src={CUBE}
            alt="Three cubes image"
          />
          <NumberData number="150+" service="Contries Connected " />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
