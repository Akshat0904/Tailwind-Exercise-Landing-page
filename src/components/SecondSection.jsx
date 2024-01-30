import VERTICAL_PORTRAIT_1 from "/vertical-portrait-1.svg";
import VERTICAL_PORTRAIT_2 from "/vertical-portrait-2.svg";
import VERTICAL_PORTRAIT_3 from "/vertical-portrait-3.svg";
import VERTICAL_PORTRAIT_4 from "/vertical-portrait-4.svg";
import VERTICAL_PORTRAIT_5 from "/vertical-portrait-5.svg";
import VERTICAL_PORTRAIT_6 from "/vertical-portrait-6.svg";
import HORIZONTAL_PORTRAIT_1 from "/horizontal-portrait-1.svg";
import HORIZONTAL_PORTRAIT_2 from "/horizontal-portrait-2.svg";
import HORIZONTAL_PORTRAIT_3 from "/horizontal-portrait-3.svg";
import HORIZONTAL_PORTRAIT_4 from "/horizontal-portrait-4.svg";
import HORIZONTAL_PORTRAIT_5 from "/horizontal-portrait-5.svg";
import HORIZONTAL_PORTRAIT_6 from "/horizontal-portrait-6.svg";
import SPARKLE from "/sparkle-star.svg";

const SecondSection = () => {
  return (
    <section className="max-w-1024 mx-auto flex flex-col justify-center items-center">
      <div className="max-w-334 mx-7 lg:mx-auto sm:max-w-582 flex flex-col">
        <button className="max-w-107 sm:max-w-116 px-20 py-10 mx-auto  font-Poppins text-base border border-at-white-100 bg-at-white-50 rounded-99  font-medium text-center text-at-primary-blue shadow-white-bottom-shadow">
          Trainings
        </button>
        <h2 className="text-at-primary-blue mt-6 font-Poppins font-semibold text-center text-2xl md:text-[57px] md:tracking-small leading-32 md:leading-64">
          <span className="bg-h2-gradient text-transparent bg-clip-text">
            Discover
          </span>{" "}
          the World of Design
        </h2>
      </div>
      <div className="max-w-358 sm:max-w-1024 mt-8 mb-102 sm:mt-60 sm:mb-250 mx-4 lg:mx-auto bg-at-white-50 border-at-white-100 rounded-lg shadow-white-full-shadow flex flex-col justify-center items-center relative">
        <div className="hidden px-50 pt-50 pb-44 sm:grid sm:grid-cols-6">
          <img src={VERTICAL_PORTRAIT_1} alt="Vertical Portrait 1" />
          <img src={VERTICAL_PORTRAIT_2} alt="Vertical Portrait 2" />
          <img src={VERTICAL_PORTRAIT_3} alt="Vertical Portrait 3" />
          <img src={VERTICAL_PORTRAIT_4} alt="Vertical Portrait 4" />
          <img src={VERTICAL_PORTRAIT_5} alt="Vertical Portrait 5" />
          <img src={VERTICAL_PORTRAIT_6} alt="Vertical Portrait 6" />
        </div>
        <div className="p-4 pb-0 grid grid-cols-2 sm:hidden ">
          <img src={HORIZONTAL_PORTRAIT_1} alt="Horizontal Portrait 1" />
          <img src={HORIZONTAL_PORTRAIT_2} alt="Horizontal Portrait 2" />
          <img src={HORIZONTAL_PORTRAIT_3} alt="Horizontal Portrait 3" />
          <img src={HORIZONTAL_PORTRAIT_4} alt="Horizontal Portrait 4" />
          <img src={HORIZONTAL_PORTRAIT_5} alt="Horizontal Portrait 5" />
          <img src={HORIZONTAL_PORTRAIT_6} alt="Horizontal Portrait 6" />
        </div>
        <div className="flex max-w-358 md:max-w-686">
          <img
            className="size-40 md:size-85 -rotate-20"
            src={SPARKLE}
            alt="Sparkle star"
          />
          <h3 className=" max-w-325 md:max-w-494 font-Poppins mt-7 -ml-6 md:ml-0 md:mt-40 text-[28px] md:text-[45px] text-at-gray-300 leading-36  md:leading-52 font-medium text-center ">
            Start training with the{" "}
            <span className="bg-h3-gradient bg-clip-text text-transparent">
              professional
            </span>{" "}
            team
          </h3>
          <img
            className="size-40 md:size-85 -ml-8 md:-ml-22 mt-69"
            src={SPARKLE}
            alt="Sparkle star"
          />
        </div>
        <div className="flex md:mb-75 p-4 md:p-0 flex-col items-center justify-center">
          <p className="max-w-253 md:max-w-323  font-Poppins text-at-primary-blue text-xs md:text-base font-medium text-center ">
            Come on, it&apos;s time to start training now!
          </p>
          <button className="w-132 md:w-195 mt-6 md:mt-12  h-50 sm:h-16 bg-at-gray-500 border-4 border-at-gray-200 rounded-12 shadow-dark-blue-shadow">
            <span className="w-124 md:w-187  text-at-white-50 font-Poppins text-xs md:text-base font-medium text-center block ">
              Start Training
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default SecondSection;

/* <div className="max-w-494">
          <img
            className="absolute top-383 left-169 -rotate-20"
            src={SPARKLE}
            alt=""
          />
          <h3 className="font-Poppins mt-40 text-[45px] text-at-gray-300 leading-52 font-medium text-center ">
            Start training with the{" "}
            <span className="bg-h3-gradient bg-clip-text text-transparent">
              professional
            </span>{" "}
            team
          </h3>
          <img className="absolute left-736 top-452" src={SPARKLE} alt="" />
        </div> */
