import CourseSection from "./CourseSection";
import CARD_1 from "/card-image-1.svg";
import CARD_2 from "/card-image-2.svg";
import CARD_3 from "/card-image-3.svg";
import CARD_4 from "/card-image-4.svg";
import CARD_5 from "/card-image-5.svg";
import CARD_6 from "/card-image-6.svg";
import CARD_7 from "/card-image-7.svg";
import CARD_8 from "/card-image-8.svg";

const ThirdSection = () => {
  return (
    <section className="max-w-1160 pb-102 sm:pb-250 ml-4 lg:mx-auto">
      <div className="flex flex-col gap-16 ">
        <div>
          <CourseSection
            CARD_1={CARD_1}
            CARD_2={CARD_2}
            CARD_3={CARD_3}
            CARD_4={CARD_4}
            children="Most Popular Courses"
          />
        </div>
        <div>
          <CourseSection
            CARD_1={CARD_5}
            CARD_2={CARD_6}
            CARD_3={CARD_7}
            CARD_4={CARD_8}
            children="Discounted trainings"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
