import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { IoIosBookmark } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarIcons">
        <AiFillHome fontSize="var(--font-m)" /> Home
      </div>
      <div className="sidebarIcons">
        <MdExplore fontSize="var(--font-m)" />
        Explore
      </div>
      <div className="sidebarIcons">
        <IoIosBookmark fontSize="var(--font-m)" />
        Bookmark
      </div>
      <div className="sidebarIcons">
        <BiSolidUser fontSize="var(--font-m)" />
        Profile
      </div>
      <div className="sidebarIcons">
        <BsFillTrashFill fontSize="var(--font-m)" />
        Trash
      </div>
      <div className="sidebarIcons">
        <BiArchiveIn fontSize="var(--font-m)" /> Archive
      </div>
    </div>
  );
};

export default Navbar;
