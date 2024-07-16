// import { Button } from "@/components/ui/button"
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider } from "./components/theme-provider";
import MobileNavbarList from "./components/mobileNavbar/MobileNavbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Sidebar />
        <Navbar />
        <Dashboard />
        <MobileNavbarList />
      </div>
    </ThemeProvider>
  );
}

export default App;
