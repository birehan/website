import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useTheme } from "../../ThemeContext";
import Footer from "../Footer";

const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`h-screen flex `}
    >
      <div className="flex flex-col flex-1">
        <Header />
    
       <div className="flex-1 layout flex flex-col gap-4 justify-between"> 
       <div className=" flex-1 flex">
          <div className="w-full h-full px-6 lg:px-8 max-w-7xl mx-auto py-8 ">
            <Outlet />
          </div>
        </div>
        <Footer/>
       </div>
      </div>
    </div>
  );
};

export default Layout;
