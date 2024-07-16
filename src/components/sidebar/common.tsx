import { MdDashboard, MdOutlineCurrencyRupee } from "react-icons/md";
import { FiBarChart2, FiFileText, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const dshboardList = [
  {
    id: 1,
    icon: <MdDashboard size={18} />,
    name: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    icon: <FiUsers size={18} />,
    name: "All classes",
    link: "/",
  },
  {
    id: 3,
    icon: <FiFileText size={18} />,
    name: "Assignments",
    link: "/",
  },
  {
    id: 4,
    icon: <FiBarChart2 size={18} />,
    name: "Performance",
    link: "/",
  },
  {
    id: 5,
    icon: <MdOutlineCurrencyRupee size={18} />,
    name: "Fee details",
    link: "/",
  },
  {
    id: 6,
    icon: <IoSettingsOutline size={18} />,
    name: "Settings",
    link: "/",
  },
];
