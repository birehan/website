import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useTheme } from "../../ThemeContext";

const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`h-screen flex `}
    >
      <div className="flex flex-col flex-1">
        <Header />
    
        <div className="flex-1 flex">
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
