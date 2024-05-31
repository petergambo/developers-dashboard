import HeaderSection from "./HeaderSection";
import SearchDevsFormSection from "./SearchDevsFormSection";
import SearchCategoriesSection from "./SearchCategoriesSection";
import DevsListSection from "./DevsListSection";
import PaddedContainer from "./Layout/PaddedContainer";

const Main = () => {
  return (
    <main className="flex-[10] bg-[#121212] border border-[#1E1E1E] pt-1 text-[#FEFEFE] ml-[20%]">
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
