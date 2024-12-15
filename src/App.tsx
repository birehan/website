import { ThemeProvider } from "./ThemeContext";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
