import STRAIGHT_STAR from "/straight-star.svg";
import ROUND_PORTRAIT from "/round-portrait.svg";
// import PEOPLE from "/people.svg";

const FifthSection = () => {
  return (
    <section className="py-102 md:py-250">
      <div className="max-w-984 mx-auto flex flex-col justify-center items-center">
        <h2 className="font-Poppins text-2xl font-normal text-center text-at-gray-300">
          Testimonial
        </h2>
        <h3 className="font-Poppins mt-4 text-at-primary-blue text-2xl md:text-[45px] text-center md:leading-52 font-semibold">
          What Our Client Say About US
        </h3>
      </div>
      <div className="max-w-377 sm:max-w-984 mt-8 lg:mt-85 flex justify-center  items-center mx-2 sm:mx-auto bg-cover h-278 md:h-632 bg-people-mobile sm:bg-people">
        <img
          className="size-100 md:size-auto mt-52 md:mt-0"
          src={STRAIGHT_STAR}
          alt="Star image"
        />
        <div className="min-w-213 sm:min-w-auto -ml-50 md:-ml-100 bg-at-white-50 max-w-327 p-3 md:p-6 flex flex-col mt-207 gap-3 md:gap-4 justify-center items-center font-Poppins border-at-white-100 shadow-white-portrait-shadow rounded-lg z-30 ">
          <img
            className="size-34 md:size-50"
            src={ROUND_PORTRAIT}
            alt="Portrait image with round border"
          />
          <h3 className="text-sm md:text-[22px] text-at-primary-blue font-semibold leading-28">
            Dilara Çınar{" "}
          </h3>
          <p className="max-w-189 md:max-w-279 text-center text-xs md:text-sm font-medium  text-at-gray-300">
            Lorem ipsum dolor sit amet consectetur. Sagittis facilisi nunc vitae
            morbi odio.
          </p>
        </div>
        <img
          className="md:-ml-100 -ml-52  size-100 md:size-auto mt-350 md:mt-410"
          src={STRAIGHT_STAR}
          alt="Star image"
        />
      </div>
    </section>
  );
};

export default FifthSection;
