import { Outlet } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import "./MainLayout.css";
const MainLayout: React.FC = () => {
  return (
    <div className='main_layout-container text-white  h-screen bg-neutral-900'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
