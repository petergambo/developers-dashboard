import HeaderSection from "./HeaderSection";
import SearchDevsFormSection from "./SearchDevsFormSection";
import SearchCategoriesSection from "./SearchCategoriesSection";
import DevsListSection from "./DevsListSection";
import PaddedContainer from "./Layout/PaddedContainer";
import { useAppContext } from "../../context/AppContext";

const Main = () => {
  const {isCollapsed} = useAppContext();
  return (
    <main className={`ml-0 md:ml-16 transition-margin duration-300 bg-[#121212] border border-[#1E1E1E] pt-1 text-[#FEFEFE] lg:ml-[20%]`}>
      {/* Header */}
      <HeaderSection />

      

      {/* Padded Container */}
      <PaddedContainer>

        {/* Dev Search Form Section */}
        <SearchDevsFormSection />

        {/* Search Categories Section */}
        <SearchCategoriesSection />

        {/* Devs List/Results Section */}
        <DevsListSection />

      </PaddedContainer>
    </main>
  );
};

export default Main;
