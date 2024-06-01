import FilterIcon from "../../assets/filter.svg";
import { useAppContext } from "../../context/AppContext";

const SearchCategoriesSection = () => {

  const { selectedSearchCategory, setSelectedSearchCategory } = useAppContext();

  const handleClick = (name: string) => {
    setSelectedSearchCategory(name);
  };

const categoryOptions = ["Frontend Developer", "Backend Developer", "Data Scientist", "Fullstack Developer"]

interface ListCardProp {
  name: string
}
  
const ListCard: React.FC<ListCardProp>  = ({name})=>{
    
  const isSelected: boolean = selectedSearchCategory === name ;
    return(
      <>
      {isSelected ? 
    <li>
      <button onClick={()=>handleClick(name)} className="px-[24px] py-[8px] border-gradient-custom">
        {name}
      </button>
    </li>
    :
    <li>
      <button onClick={()=>handleClick(name)} className="bg-[#1E1E1E] px-[24px] py-[8px] border border-[#292929] rounded-[10px]">
      {name}
      </button>
    </li>
  }
    </>
    )
  }
    return(
        <section className="hidden md:flex gap-4 justify-between">
          <ul className="flex gap-2">
             {categoryOptions.map(category=> {
              return(<ListCard name={category} />)
             })}
          </ul>


          <button className="px-[24px] py-[8px] border border-[#292929] rounded-[10px] flex items-center  gap-1">
            <img src={FilterIcon} alt="Filter Icon" />
            Filters
          </button>
        </section>
    )
}

export default SearchCategoriesSection