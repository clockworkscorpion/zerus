import {NumberBullet} from "@/components";
import styles from "@/styles";

const NewResearchFeatures = ({ imgUrl, title, bulletpoints }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210]">
    {/* <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]}`}>

    </div> */}
    <img src={imgUrl} alt="icon" className="w-10 h-10 object-contain" />
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[15px] text-[#B0B0B0] leading-[32px]">
      {bulletpoints.map((feature) => (
        <>{feature}<br/></>
      ))}
    </p>
  </div>
);

export default NewResearchFeatures