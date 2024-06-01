import Navlink from "../Navlink";

import DashIcon from "../../assets/element-3.svg";
import MoneyIcon from "../../assets/monetization.svg";
import NotifIcon from "../../assets/notification.svg";

interface MainNavListSectionProps {
  isCollapsed: boolean;
}

const MainNavListSection: React.FC<MainNavListSectionProps> = ({ isCollapsed }) => {
  const NavlistObjects = [
    { name: "Dashboard", icon: DashIcon, url: "", isActive: true },
    { name: "Monetization", icon: MoneyIcon, url: "", isActive: false },
    { name: "Notification", icon: NotifIcon, url: "", isActive: false },
  ];

  return (
    <ul>
      {NavlistObjects.map((nav) => (
        <li key={nav.name}>
          <Navlink
            isActive={nav.isActive}
            name={nav.name}
            icon={nav.icon}
            url={nav.url}
            isCollapsed={isCollapsed}
          />
        </li>
      ))}
    </ul>
  );
};

export default MainNavListSection;
