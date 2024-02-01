import PURPLE_DOT from "/purple-dot.svg";
import PROFILE_IMG from "/profile-img.svg";
import PROFILE_ICON from "/profile-icon.svg";
import EYE_ICON from "/eye-icon.svg";
import LIKE_ICON from "/like-icon.svg";

const Card = ({ cardImage }) => {
  return (
    <div className="min-w-266 p-4 bg-at-white-50 border rounded-lg shadow-white-card-shadow text-at-primary-blue">
      <img src={cardImage} alt="Card-1" />
      <div className="flex justify-between my-7">
        <div className="w-116 p-10 border rounded-lg bg-at-primary-white flex shadow-white-bottom-shadow">
          <img src={PURPLE_DOT} alt="Purple Dot" />
          <button className="font-Poppins text-sm font-medium ml-2">
            Web Design
          </button>
        </div>
        <p className="my-auto font-Poppins text-center text-2xl font-semibold">
          $150
        </p>
      </div>
      <p className="my-7 font-Poppins text-sm">
        Launch career as a web desi- gner and learning more.
      </p>
      <div className="flex gap-3 font-Poppins text-sm py-11">
        <img src={PROFILE_IMG} alt="Profile photo" />
        <div className="flex gap-20">
          <p className="flex justify-center items-center gap-1">
            <img src={PROFILE_ICON} alt="Profile Icon" />
            5.3k
          </p>
          <p className="flex justify-center items-center gap-1">
            <img src={EYE_ICON} alt="Eye Icon" />
            3.2k
          </p>
          <p className="flex justify-center items-center gap-1">
            <img src={LIKE_ICON} alt="Like Icon" />
            128
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
