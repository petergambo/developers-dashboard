import SearchIcon from "../../../assets/search-normal.svg";
import FilterIcon from "../../../assets/filter.svg";
import MobileSearchCategoriesSection from "./MobileSearchCategoriesSection";

const MobileHeader = () => {
  return (
    <header className="flex flex-col gap-4 md:hidden  px-4 border-b py-2 border-[#1E1E1E]">
      {/* Only show on mobile */}
      <section className="flex gap-2 justify-end">
        <img className="px-2" src={SearchIcon} alt="Search Icon" />
        <img className="px-2" src={SearchIcon} alt="menu icon" />
      </section>

      <section>
        <h2 className="leading-[32px] text-[20px] font-bold">
          Find Developers
        </h2>
      </section>

      <section className="flex gap-4">
        <div className="flex-10 flex flex-[3] overflow-hidden">
          <div className="flex-10 flex bg-[#1E1E1E] border border-[#292929] rounded-[10px] flex-[3] overflow-hidden">
            <button className="flex-1 w-1/3 bg-search-btn-gradient">
              Fulltime
            </button>
            <button className="flex-1 w-1/3">Freelance</button>
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
      <MobileSearchCategoriesSection />
    </header>
  );
};

export default MobileHeader;
