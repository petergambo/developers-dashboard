
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";


const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-[#121212]">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
