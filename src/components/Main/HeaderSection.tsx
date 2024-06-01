import MobileHeader from "./Mobile/MobileHeader"

const HeaderSection = () => {
    return(   
      <>
      <MobileHeader/>

    <header className="hidden md:flex justify-between px-4 border-b py-2 border-[#1E1E1E]">

      {/* Show on Desktop */}
      <h2 className="leading-[32px] text-[20px] font-bold">
        Find Developers
      </h2>

      <div className="hidden md:flex leading-[24px] font-medium text-[16px] bg-[#1E1E1E] px-[24px] py-[8px] rounded-[10px]">
        Sort by high streetcred
      </div>
    </header>
    
    </>)
}

export default HeaderSection