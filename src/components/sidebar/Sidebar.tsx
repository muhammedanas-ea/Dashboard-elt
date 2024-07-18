import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { dshboardList } from "./common";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <aside
      id="logo-sidebar"
      className="hidden md:block fixed top-0 left-0 z-40 border-r-[1px] dark:border-r-[#ffffff1c] border-r-[#0000001a] w-[220px] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <Link to="/" className="flex items-center pl-2.5 mb-3">
          <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </h1>
        </Link>
        <div className="pl-2.5 h-[133px] flex flex-col justify-center dark:text-white">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            John Doe
          </h4>
          <h4 className="scroll-m-20 list_fonts">Intermediate</h4>
        </div>
        <ul className="space-y-2 font-medium">
          {dshboardList.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className={`${
                selectedItem === item.id
                  ? "bg-gray-300 text-black font-bold"
                  : "hover:bg-gray-200 dark:text-white"
              } rounded-sm`}
            >
              <Link
                to={item.link}
                className="flex gap-[10px] items-center p-2 dark:hover:bg-gray-700 group"
              >
                <div className={`${selectedItem === item.id ? "bg-[#0467FC] text-white" : "bg-[#EFEDEA] dark:text-black"} w-[34px] h-[34px]  rounded-3xl  flex items-center justify-center`}>
                  {item.icon}
                </div>
                <span className={`${selectedItem === item.id ? "text-black list_fonts font-semibold" : "list_fonts "} "list_fonts flex-1 ml-3 whitespace-nowrap"`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Link
            to="/"
            className="text-black flex gap-[10px] items-center p-2 dark:hover:bg-gray-700 group"
          >
            <div className="w-[34px] h-[34px] dark:text-black rounded-3xl bg-[#EFEDEA] flex items-center justify-center">
              <FiLogOut size={18} />
            </div>
            <span className="list_fonts dark:text-white flex-1 ml-3 whitespace-nowrap">
              Log out
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
