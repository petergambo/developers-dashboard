import Navlink from "../Navlink"
import LogIcon from '../../assets/logout.svg'
import SettIcon from '../../assets/setting.svg'

interface BottomNavListSectionProps {
    isCollapsed: boolean
}
const BottomNavListSection: React.FC<BottomNavListSectionProps> = ({isCollapsed})=> {
    const NavListObjects = [
        {name:"Settings", icon: SettIcon, isActive:false, url:""},
        {name:"Logout", icon: LogIcon, isActive:false, url:""}
    ]
    return(
        <ul className="">
            {NavListObjects.map(nav=>{
                return(
                <li>
                    <Navlink isActive={nav.isActive} name={nav.name} icon={nav.icon} url={nav.url} isCollapsed={isCollapsed}/>
                </li>
                )
                })}
            </ul>
    )
}

export default BottomNavListSection