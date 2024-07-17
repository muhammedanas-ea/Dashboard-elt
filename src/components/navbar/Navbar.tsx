import { Link } from "react-router-dom";
import { DarkModeButton } from "../darkModeButton/DarkModeButton";
import { FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 ml-0 md:ml-[13rem] bg-[#FFFFFF] dark:bg-[#1f2937] border-b-[1px] border-b-[#0000001a] dark:border-b-[#ffffff1c]">
      <nav className="hidden md:flex items-center justify-between mx-auto  px-6 3xl:px-0 h-[70px]">
        <ul className="md:flex md:items-center md:gap-10 hidden list_fonts dark:text-white">
          <li>
            <Link to="/" className="cursor-pointer">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/" className="cursor-pointer">
              News
            </Link>
          </li>
          <li>
            <Link to="/" className="cursor-pointer">
              Help center
            </Link>
          </li>
          <li>
            <Link to="/" className="cursor-pointer">
              Customer care
            </Link>
          </li>
        </ul>
        <DarkModeButton />
      </nav>
      <div className="flex items-center justify-between mx-auto px-6 3xl:px-0 h-[60px]">
        <h1 className="heading dark:text-white">Dashboard</h1>
        <FiBell size={22} className="md:hidden dark:text-white" />
      </div>
    </div>
  );
};

export default Navbar;
