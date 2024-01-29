const FirstSection = () => {
  return (
    <div className="relative min-h-screen  max-w-1440 xl:w-full xl:mx-auto pt-44 ">
      <div className="flex gap-12 lg:gap-207 ">
        <div className="h-310 md:h-552 w-284 md:w-552 md:ml-60 bg-at-purple-100 rounded-310  md:rounded-552  mix-blend-hard-light blur-5xl "></div>
        <div className="h-310 md:h-552 w-284 md:w-552 md:mr-69 bg-at-blue-100  rounded-310 md:rounded-552  mix-blend-hard-light blur-5xl "></div>
      </div>
      <div className="absolute w-full top-19 sm:top-77 flex flex-col items-center justify-center">
        <h1 className="max-w-356 mx-17  sm:max-w-749 text-at-primary-blue font-Poppins font-semibold text-center text-2xl sm:text-[57px] sm:tracking-small leading-32 sm:leading-64">
          Unlock Your Potential with{" "}
          <span className="bg-h1-gradient text-transparent bg-clip-text">
            Sinar Education
          </span>
        </h1>
        <p className="max-w-351 mx-19 sm:max-w-607 mt-4 sm:mt-6 font-Poppins text-at-primary-blue text-xs sm:text-base font-medium text-center ">
          Education isn&apos;t just about acquiring knowledge; it&apos;s the key
          that opens doors to new worlds
          <span className="hidden sm:inline">
            , empowers individuals, and shapes a brighter future
          </span>
          <span className="inline sm:hidden">.</span>
        </p>
        <button className="w-132 sm:w-195 mt-6 sm:mt-12  h-50 sm:h-16 bg-at-gray-500 border-4 border-at-gray-200 rounded-12">
          <span className="w-124 sm:w-187  text-at-white-50 font-Poppins text-xs sm:text-base font-medium text-center block ">
            Start Training
          </span>
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
