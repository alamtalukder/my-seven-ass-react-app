import { BiHomeAlt2 } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">
          <BiHomeAlt2 />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/timeline">
          <RiTimeLine />
          TimeLine
        </NavLink>
      </li>

      <li>
        <NavLink to="/state">
          <VscGraphLine />
          State
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className=" text-xl"><span className="font-bold">Keen</span>Keeper</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
