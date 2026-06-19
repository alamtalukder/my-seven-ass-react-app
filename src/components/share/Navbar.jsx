import { NavLink } from "react-router-dom";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-900 font-bold" : ""
          }
        >
          <BiSolidHomeAlt2 />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive ? "text-green-900 font-bold" : ""
          }
        >
          <RiTimerLine />
          TimeLine
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/state"
          className={({ isActive }) =>
            isActive ? "text-green-900 font-bold" : ""
          }
        >
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
          <a className="text-xl">
            <span className="font-bold">Keen</span>Keeper
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
