import { useEffect, useState } from 'react';
import ProfileMain from "../assets/profile-main.svg";
import BottomNavListSection from "./Sidebar/BottomNavlist";
import MainNavListSection from "./Sidebar/MainNavlist";
import ProfileImageSection from "./Sidebar/ProfileHead";
import { useViewportWidth } from '../hooks/screen_change';
import { useAppContext } from '../context/AppContext';



const Sidebar = () => {
  const {isCollapsed, setIsCollapsed} = useAppContext();

  const isWide = useViewportWidth();

  useEffect(() => {
    setIsCollapsed(!isWide); // Collapse if the viewport is less than 1200px
  }, [isWide]);

  return (
    <aside className={` hidden md:flex relative md:fixed h-screen  flex-col bg-[#121212] p-4 transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-1/5'}`}>
      {/* Toggle Button */}
    

      {/* Profile Picture */}
      <ProfileImageSection profileImage={ProfileMain} />

      {/* Main Nav Link */}
      <MainNavListSection isCollapsed={isCollapsed} />

      {/* Spacer Div */}
      <div className="flex-1"></div>

      {/* Bottom Nav List Section */}
      <BottomNavListSection isCollapsed={isCollapsed} />
    </aside>
  );
};

export default Sidebar;
