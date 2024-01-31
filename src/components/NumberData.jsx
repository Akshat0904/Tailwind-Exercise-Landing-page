const NumberData = ({ number, service }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-Poppins bg-h4-gradient text-transparent bg-clip-text text-[32px] md:text-[45px] text-center leading-40 md:leading-52 font-semibold">
        {number}
      </h3>
      <p className="font-Poppins text-at-black-100 font-medium text-sm md:text-base text-center">
        {service}
      </p>
    </div>
  );
};

export default NumberData;
