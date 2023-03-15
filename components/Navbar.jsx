import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menu = ({ visibility, style, textStyle }) => (
  <ul className={visibility} style={textStyle}>
    <li className={style}>
      <Link href="/#overview">ABOUT US</Link>
    </li>
    <li className={style}>
      <Link href="/biosimilars">BIOSIMILARS</Link>
    </li>
    <li className={style}>
      <Link href="/pipeline">PIPELINE</Link>
    </li>
    <li className={style}>
      <Link href="/research">R&D PLATFORM</Link>
    </li>
    <li className={style}>
      <Link href="/partnerships">PARTNERSHIPS</Link>
    </li>
    <Link href="#contact" className="px-4">
      <button className="px-2 py-4 border">
        <span className={style}>
          CONTACT US
        </span>
      </button>
    </Link>
  </ul>
);

const Navbar = () => {
  const [isMobileNav, setMobileNav] = useState("false");
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setMobileNav(!isMobileNav);
  };

  useEffect(() => {
      const changeNav = () => {
          if(window.scrollY >= 90) {
              setColor("#080a0e");
              // setTextColor('#000000')
              setTextColor("#ffffff");
          } else {
              setColor('transparent')
              setTextColor('#ffffff')
          }
      }
      window.addEventListener('scroll', changeNav);
  }, []);
  

  return (
    <div
      style={{ background: `${color}` }}
      className="fixed left-0 top-0 w-full z-[10000] ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-evenly items-center p-4 text-white">
        <Link href="/">
          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Logo
          </h1> */}
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-[320px] h-[50px] object-fit align-middle"
          />
        </Link>

        <Menu
          visibility="hidden sm:flex"
          style="p-4 hover:text-gray-500"
          textStyle={{ color: `${textColor}` }}
        />
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer">
          {isMobileNav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}`}} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}`}} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            isMobileNav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <Menu style="p-4 text-4xl hover:text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
