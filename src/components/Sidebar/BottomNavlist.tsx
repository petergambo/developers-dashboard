import Navlink from "../Navlink"
import LogIcon from '../../assets/logout.svg'
import SettIcon from '../../assets/setting.svg'

const BottomNavListSection = ()=> {
    const NavListObjects = [
        {name:"Settings", icon: SettIcon, isActive:false, url:""},
        {name:"Logout", icon: LogIcon, isActive:false, url:""}
    ]
    return(
        <ul className="">
            {NavListObjects.map(nav=>{
                return(
                <li>
                    <Navlink isActive={nav.isActive} name={nav.name} icon={nav.icon} url={nav.url}/>
                </li>
                )
                })}
            </ul>
    )
}

export default BottomNavListSection