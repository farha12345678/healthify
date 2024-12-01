import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../../../public/assets/logo2.jpg"
const Navbar = () => {
    return (
        <div className="bg-base-100 ">
            <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Courses</a></li>
        <li>
          <a>Instructors</a>
        </li>
        <li><a>Blogs</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="">
      <div className="flex">
      <Image
      src={logo}
      alt="logo"
      className="h-14 lg:w-20 w-16 bg-transparent"
      />
      <p className="text-2xl font-bold mt-3 text-[#287279]">Healthify</p>
      </div>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary>Courses</summary>
         </details>
      </li>
      <li>
        <details>
          <summary>Instructors</summary>
         </details>
      </li>
      <li>
        <details>
          <summary>Blogs</summary>
         </details>
      </li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <h1 className="text-2xl text-[#287279]"><HiOutlineShoppingBag /></h1>
    <a className="p-2 bg-[#287279] text-white rounded-3xl ml-2">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;