import MobileNavbarList from "@/components/mobileNavbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dark:bg-[#1f2937ed]">
      <Sidebar />
      <Navbar />
      <Outlet />
      <MobileNavbarList />
    </div>
  );
};
export default DashboardLayout;
