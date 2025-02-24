import { Outlet } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
