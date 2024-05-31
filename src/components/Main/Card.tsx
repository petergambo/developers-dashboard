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
      <div className="flex justify-between gap-4">
        {/* Image */}
        <img src={`/images/${person.imageSource}`} alt={person.firstName + ' ' + person.lastName} />

        {/* Details Div */}
        <div className="flex-1 flex flex-col gap-1">
          <h4 className="leading-[20px] text-[20px] font-bold">{person.firstName + ' ' + person.lastName}</h4>
          <p className="text-[#888888] text-[16px] font-medium">{person.address}</p>
          <p className=" font-bold text-[14px] leading-[20px] border border-[#FEFEFE] px-[10px] py-[4px] self-start rounded-[20px]">
            {person.specialty}
          </p>
        </div>

        {/* Hire Button */}
        <div>
          <button className="bg-[#FDD649] rounded-[30px] px-[16px] py-[8px] text-[#121212] leading-[24px] font-medium">
            Hire Me
          </button>
        </div>
      </div>

      {/* Portfolio Slider */}
      <div className="container p-1">
        <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
          <div className="flex-none w-[33.33%] sm:w-[50%] md:w-[33.33%] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
            <DevsChildCard
              title="My_Resume"
              category="Others"
              description="I am updating my resume, as completing my projects."
              updatedAt={new Date(Date.now())}
            />
          </div>

          {!isFirst && (
            <div className="flex-none w-[33.33%] sm:w-[50%] md:w-[33.33%] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
              <AdsCard />
            </div>
          )}
          <div className="flex-none w-[33.33%] sm:w-[50%] md:w-[33.33%] lg:w-[calc(33.33%-1rem)] xl:w-[calc(33.33%-1rem)]">
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
