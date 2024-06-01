// components/DevelopersCard.tsx
import AdsCard from './AdsCard';
import DevsChildCard from './DevsChildCard';
import { Dev } from '../../models/DevModel';


type DevelopersCardProps = {
  person: Dev;
  isFirst?: boolean;
};

const DevelopersCard: React.FC<DevelopersCardProps> = ({ person, isFirst = false }) => {
  return (
    <div className="flex flex-col p-4 bg-[#1E1E1E] rounded-[10px] gap-1 m-2">
      <div className="flex justify-between gap-2 md:gap-4">
        {/* Image */}
        <img className='w-[32px] h-[32px] md:w-[64px] md:h-[64px]' src={`/images/${person.imageSource}`} alt={person.firstName + ' ' + person.lastName} />

        {/* Details Div */}
        <div className="flex-1 flex flex-col gap-1">
          <h4 className="leading-[30px] md:leading-[20px] text-[18px] md:text-[20px] font-bold">{person.firstName + ' ' + person.lastName}</h4>
          <p className="text-[#888888] mt-1 text-[14px] md:text-[16px] font-medium">{person.address}{'\n'} N20,000</p>
          <p className=" font-bold text-nowrap text-[12px] leading-[16px] md:text-[14px] md:leading-[20px] border border-[#FEFEFE] px-[10px] py-[4px] self-start rounded-[20px]">
            {person.specialty} 
          </p>
        </div>

        {/* Hire Button */}
        <div>
          <button className="bg-[#FDD649] font-[14px] md:font-[16px] text-nowrap rounded-[30px] py-[4px] px-[12px] md:px-[16px] md:py-[8px] text-[#121212] leading-[24px] font-medium">
            Hire Me
          </button>
        </div>
      </div>

      {/* Portfolio Slider */}
      <div className="container h-[172px] ">
        <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
          <div className="flex-none w-[280px] sm:w-[50%] md:w-[320px] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
            <DevsChildCard
              title="My_Resume"
              category="Others"
              description="I am updating my resume, as completing my projects."
              updatedAt={new Date(Date.now())}
            />
          </div>

          {!isFirst && (
            <div className="flex-none h-[152px] w-[280px] sm:w-[50%] md:w-[320px] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
              <AdsCard />
            </div>
          )}
          <div className="flex-none h-[152px] w-[280px] md:w-[320px] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
            <DevsChildCard
              title="Portfolio"
              category="Others"
              description="Another description"
              updatedAt={new Date(Date.now())}
            />
          </div>
        </div>
      </div>
      {/* CardEnd */}
    </div>
  );
};

export default DevelopersCard;
