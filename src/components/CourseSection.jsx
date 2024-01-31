import Card from "./Card";
import LEFT_ARROW from "/left-arrow.svg";
import RIGHT_ARROW from "/right-arrow.svg";

const CourseSection = ({ CARD_1, CARD_2, CARD_3, CARD_4, children }) => {
  return (
    <>
      <div className="flex justify-between ">
        <h2 className="font-Poppins text-at-primary-blue text-[32px] leading-40 font-medium ">
          {children}
        </h2>
        <div className="hidden xl:flex gap-3">
          <img src={LEFT_ARROW} alt="Left Arrow" />
          <img src={RIGHT_ARROW} alt="Right Arrow" />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-6 lg:gap-8">
        <Card cardImage={CARD_1} />
        <Card cardImage={CARD_2} />
        <Card cardImage={CARD_3} />
        <Card cardImage={CARD_4} />
      </div>
    </>
  );
};

export default CourseSection;
