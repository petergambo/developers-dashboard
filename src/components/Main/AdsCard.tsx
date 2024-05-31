import AdsImage from '../../assets/adscard.svg'

const AdsCard: React.FC = () => {
    return (
      <div className="flex min-h-[180px] flex-col gap-2 bg-[#292929] rounded-[10px] border border-[#414141] shadow-md p-4 m-2 ml-0 flex-shrink-0 w-auto">
        <img src={AdsImage} alt="Ads Image" />
    </div>
    );
  };

  export default AdsCard