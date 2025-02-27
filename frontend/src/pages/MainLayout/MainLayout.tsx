import { Outlet } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className='main_layout-container text-white flex flex-col min-h-screen bg-neutral-900'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
