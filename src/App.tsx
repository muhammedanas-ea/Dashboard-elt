import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
