interface NavlinkProps {
  isActive: boolean;
  name: string;
  url: string;
  icon: string;
}

const Navlink: React.FC<NavlinkProps> = ({ isActive, name, url, icon }) => {
  return (
    <a href={url}>
    <div className={`flex items-center p-2 text-[#888888] leading-[24px] text-[16px] font-medium ${isActive ? 'text-[#FEFEFE] bg-[#292929] rounded-[10px]' : ''}`}>
      <div className="flex-[2]">
        <img src={icon}/>
      </div>
      <div className="flex-[10]">
        {name}
      </div>
    </div>
    </a>
  );
};

export default Navlink;
