// import { Button } from "@/components/ui/button"
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div>
      <Sidebar />
      <Navbar />
      <Dashboard />
    </div>
    </ThemeProvider>
  );
}

export default App;
