"use client";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handlemenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header>
        <div className="subContainer py-xl-4 col-xl-10 mx-auto ">
          <h5 className="mx-2 m-lg-0 d-flex justify-content-between">
            <span className="m-xl-2 logo-label text-white">BrandName</span>
            <div className="menuContainer d-flex align-items-center d-xl-none">
              <div
                className={`menu-icon ${showMenu ? "active" : ""}`}
                onClick={handlemenu}
              >
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </h5>
          <ul className={showMenu ? "expanded" : ""}>
            <li>
              <Link href="/" className="header-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="header-link">
                Download
              </Link>
            </li>
            <li>
              <Link href="#" className="header-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="login" className="header-link">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
