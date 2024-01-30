const FirstSection = () => {
  return (
    <section className="relative  max-w-1440 xl:mx-auto pt-19 pb-7 md:pt-44 md:pb-44 border-b border-at-primary-blue ">
      <div className="flex gap-16 lg:gap-207 ">
        <div
          className="h-310 md:h-552 w-284 md:w-552 md:ml-60 bg-at-purple-100 rounded-310  md:rounded-552  mix-blend-hard-light 
        blur-100 md:blur-5xl "
        ></div>
        <div className="h-310 md:h-552 w-284 md:w-552 md:mr-69 bg-at-blue-100  rounded-310 md:rounded-552  mix-blend-hard-light blur-100 md:blur-5xl  "></div>
      </div>
      <div className="absolute w-full top-19 md:top-77 flex flex-col items-center justify-center">
        <h1 className="max-w-356 mx-17  md:max-w-749 text-at-primary-blue font-Poppins font-semibold text-center text-2xl md:text-[57px] md:tracking-small leading-32 md:leading-64">
          Unlock Your Potential with{" "}
          <span className="bg-h1-gradient text-transparent bg-clip-text">
            Sinar Education
          </span>
        </h1>
        <p className="max-w-351 mx-19 md:max-w-607 mt-4 sm:mt-6 font-Poppins text-at-primary-blue text-xs md:text-base font-medium text-center ">
          Education isn&apos;t just about acquiring knowledge; it&apos;s the key
          that opens doors to new worlds
          <span className="hidden sm:inline">
            , empowers individuals, and shapes a brighter future
          </span>
          <span className="inline sm:hidden">.</span>
        </p>
        <button className="w-132 md:w-195 mt-6 md:mt-12  h-50 sm:h-16 bg-at-gray-500 border-4 border-at-gray-200 rounded-12 shadow-dark-blue-shadow">
          <span className="w-124 md:w-187  text-at-white-50 font-Poppins text-xs md:text-base font-medium text-center block ">
            Start Training
          </span>
        </button>
      </div>
    </section>
  );
};

export default FirstSection;
