const DevsChildCard: React.FC<{
    title: string;
    category: string;
    description: string;
    updatedAt: Date;
  }> = ({ title, category, description, updatedAt }) => {
    return (
      <div className="flex h-[152px] flex-col justify-between gap-1 overflow-hidden bg-[#292929] rounded-[10px] border border-[#414141] shadow-md p-4 m-2 ml-0 flex-shrink-0">
        <p className=" font-medium text-[12px] leading-[16px] border border-[#FEFEFE] px-[12px] py-[4px] self-start rounded-[20px]">
          {category}
        </p>
        <h5 className="text-[18px] text-[#FEFEFE] font-bold leading-[30px]">
          {title}
        </h5>
        <div className="h-[32px]">
        <p className="text-[12px] leading-[16px] text-[#B7B7B7] font-normal">
          {description}
        </p>
        </div>
        <p className="text-[12px] leading-[16px] text-[#B7B7B7] font-normal text-nowrap">
          {" "}
          Last Updated: <span className="font-bold text-[#FEFEFE] ">{updatedAt.toUTCString()}</span>
        </p> 
      </div>
    );
  };

  export default DevsChildCard