// import { Button } from "@/components/ui/button"
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider } from "./components/theme-provider";
import { dshboardList } from "./components/sidebar/common";
import { Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Sidebar />
        <Navbar />
        <Dashboard />
        <div className="h-[56px] w-full border-[1px] border-t-[#0000001a] bg-[#ffff] sticky bottom-0 md:hidden">
          <div className="mx-auto  px-6 3xl:px-0">
            <ul className="flex  items-center justify-between overflow-x-scroll">
              {dshboardList.map((item) => (
                <li key={item.id} className="hover:bg-gray-200 rounded-sm">
                  <Link
                    to={item.link}
                    className="flex flex-col gap-[10px] items-center p-2 dark:hover:bg-gray-700 group"
                  >
                    <div className="w-[34px] h-[34px] rounded-3xl bg-[#EFEDEA] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="list_fonts flex-1 ml-3 whitespace-nowrap">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
