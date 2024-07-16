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
    icon: <FiUsers />,
    name: "All classes",
    link: "/",
  },
  {
    id: 3,
    icon: <FiFileText />,
    name: "Assignments",
    link: "/",
  },
  {
    id: 4,
    icon: <FiBarChart2 />,
    name: "Performance",
    link: "/",
  },
  {
    id: 5,
    icon: <MdOutlineCurrencyRupee />,
    name: "Fee details",
    link: "/",
  },
  {
    id: 6,
    icon: <IoSettingsOutline />,
    name: "Settings",
    link: "/",
  },
];
