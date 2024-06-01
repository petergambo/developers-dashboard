import { useAppContext } from "../../../context/AppContext";

const MobileSearchCategoriesSection = () => {

  const { selectedSearchCategory, setSelectedSearchCategory } = useAppContext();

  const handleClick = (name: string) => {
    setSelectedSearchCategory(name);
  };

const categoryOptions = ["Frontend Developer", "Backend Developer", "Data Scientist", "Fullstack Developer", "123"]

interface ListCardProp {
  name: string
}
  
const ListCard: React.FC<ListCardProp>  = ({name})=>{
    
  const isSelected: boolean = selectedSearchCategory === name ;
    return(
      <>
      {isSelected ? 
    <li>
      <div onClick={()=>handleClick(name)} className="flex flex-nowrap text-nowrap px-[12px] text-[12px] py-[4px] border-gradient-custom">
        {name}
      </div> 
    </li>
    :
    <li>
      <div onClick={()=>handleClick(name)} className="bg-[#1E1E1E] flex flex-nowrap text-nowrap text-[12px] px-[12px] py-[4px] border border-[#292929] rounded-[5px]">
      {name}
      </div>
    </li>
  }
    </>
    )
  }
    return(
        <section className="flex gap-4 justify-between">
          <ul className="flex gap-2">
             {categoryOptions.map(category=> {
              return(<ListCard name={category} />)
             })}
          </ul>
        </section>
    )
}

export default MobileSearchCategoriesSection