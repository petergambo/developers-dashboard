import SearchIcon from "../../../assets/search_flow_mobile.svg";
import MobileMenuIcon from "../../../assets/menu_mobile.svg";
import FilterIcon from "../../../assets/filter.svg";
import MobileSearchCategoriesSection from "./MobileSearchCategoriesSection";
import HorizontalScrollWrapper from "../../Layout/HorizontalScrollWrapper";
import { useAppContext } from "../../../context/AppContext";

const MobileHeader = () => {
  const {selectedJobType, setSelectedJobType} = useAppContext()

  const jobTypeOptions = ["Fulltime", "Freelance"]
  
  const handleJobTypeClick = (name: string) => {
    setSelectedJobType(name);
  };
  return (
    <header className="flex flex-col gap-4 md:hidden  px-4 py-2 ">
      {/* Only show on mobile */}
      <section className="flex gap-1 justify-end">
        <img className="" src={SearchIcon} alt="Search Icon" />
        <img className="" src={MobileMenuIcon} alt="menu icon" />
      </section>

      <section>
        <h2 className="leading-[30px] text-[18px] font-bold">
          Find Developers
        </h2>
      </section>

      <section className="flex gap-2 md:gap-4">
        <div className="flex-10 flex flex-[3] overflow-hidden">
          <div className="flex-10  h-[48px] flex p-1 bg-[#1E1E1E] border border-[#292929] rounded-[10px] flex-[3] overflow-hidden">
          {jobTypeOptions.map(option => {
        const isSelected:boolean = selectedJobType === option
        return( 
        isSelected 
        ? <button key={option} onClick={()=>handleJobTypeClick(option)} className='flex-1 bg-search-btn-gradient rounded-[5px]'>{option}</button>
        : <button key={option} onClick={()=>handleJobTypeClick(option)} className='flex-1'>{option}</button>
        )
      })}
          </div>
          {/* Spacer */}
          <div className="flex-1 w-1/3"></div>
        </div>

        <div className="flex-2">
          <button className="px-[24px] py-[8px] border border-[#292929] rounded-[10px] flex gap-1">
            <img src={FilterIcon} alt="Filter Icon" />
          </button>
        </div>
      </section>
      <HorizontalScrollWrapper>
          <MobileSearchCategoriesSection />
      </HorizontalScrollWrapper>
    </header>
  );
};

export default MobileHeader;
