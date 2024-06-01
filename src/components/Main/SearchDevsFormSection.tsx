import SearchIcon from "../../assets/search-normal.svg";

const SearchDevsFormSection = () => {
    return(
    <section className="hidden md:flex gap-4">
    <div className=" bg-[#1E1E1E] border border-[#292929] flex-[9] h-[56px] rounded-[10px] flex items-center justify-between">
      <img className="px-2" src={SearchIcon} alt="Search Icon" />
      <input
        className="bg-transparent outline-none appearance-none flex-1"
        type="text"
        placeholder='Try searching "Full time Backend Developer" '
      />
    </div>

    <div className="flex bg-[#1E1E1E] border border-[#292929] rounded-[10px] flex-[3] overflow-hidden">
      <button className="flex-1 bg-search-btn-gradient">Fulltime</button>
      <button className="flex-1">Freelance</button>
    </div>
  </section>)
}

export default SearchDevsFormSection