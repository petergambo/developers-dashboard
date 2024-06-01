import AdsImage from "../../assets/adscard.svg";

const AdsCard: React.FC = () => {
  return (
    <div className="flex-none h-[152px] w-[280px] sm:w-[50%] md:w-[320px] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
      <div className=" overflow-hidden flex justify-center items-center h-[152px] flex-col gap-2 bg-[#292929] rounded-[10px] border border-[#414141] shadow-md m-2 ml-0 flex-shrink-0">
        <img height={'300'} width={'320'} className="border" src={AdsImage} alt="Ads Image" />
      </div>
    </div>
  );
};

export default AdsCard;
