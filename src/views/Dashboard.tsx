
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";


const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
