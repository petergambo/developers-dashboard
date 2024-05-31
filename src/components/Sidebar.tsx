import ProfileMain from "../assets/profile-main.svg";
import BottomNavListSection from "./Sidebar/BottomNavlist";
import MainNavListSection from "./Sidebar/MainNavlist";
import ProfileImageSection from "./Sidebar/ProfileHead";

const Sidebar = () => {
  return (
    <aside className="flex fixed w-1/5 h-screen flex-col bg-[#121212] flex-[2] p-4">
      {/* Profile Picture */}
      <ProfileImageSection profileImage={ProfileMain} />

      {/* Main Nav Link */}
      <MainNavListSection />

      {/* Spacer Div */}
      <div className="flex-1"></div>

      {/* Bottom Nav List Section */}
      <BottomNavListSection />
    </aside>
  );
};

export default Sidebar;
