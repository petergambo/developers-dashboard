import FilterIcon from "../../assets/filter.svg";

const SearchCategoriesSection = () => {
    return(
        <section className="flex gap-4 justify-between">
          <ul className="flex gap-2">
            <li>
              <button className="px-[24px] py-[8px] border-gradient-custom">
                Discover
              </button>
            </li>
            <li>
              <button className="bg-[#1E1E1E] px-[24px] py-[8px] border border-[#292929] rounded-[10px]">
                Frontend Developer
              </button>
            </li>
            <li>
              <button className="bg-[#1E1E1E] px-[24px] py-[8px] border border-[#292929] rounded-[10px]">
                Backend Developer
              </button>
            </li>
            <li>
              <button className="bg-[#1E1E1E] px-[24px] py-[8px] border border-[#292929] rounded-[10px]">
                Software Developer
              </button>
            </li>
          </ul>


          <button className="px-[24px] py-[8px] border border-[#292929] rounded-[10px] flex gap-1">
            <img src={FilterIcon} alt="Filter Icon" />
            Filters
          </button>
        </section>
    )
}

export default SearchCategoriesSection