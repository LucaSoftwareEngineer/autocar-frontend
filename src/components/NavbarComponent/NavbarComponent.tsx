import SidebarComponent from "../SidebarComponent/SidebarComponent.tsx";
import { useState } from "react";

const NavbarComponent = () => {

  const [isOpenUserDropDownMenu, setisOpenUserDropDownMenu] = useState(false);
  const [isOpenSidebarMobile, setisOpenSidebarMobile] = useState(true);

  const toggleUserDropDown = () => {
    setisOpenUserDropDownMenu(!isOpenUserDropDownMenu);
  };

  const toggleSidebarMobile = () => {
    setisOpenSidebarMobile(!isOpenSidebarMobile);
  }

  const userDropDownClasseChiuso = "fixed my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm absolute z-50 top-[50px] right-0 hidden";
  const userdropDownClasseAperto = "fixed my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm absolute z-50 top-[50px] right-0";

  const userDropDownClasse = isOpenUserDropDownMenu ? userdropDownClasseAperto : userDropDownClasseChiuso;

  const sidebarMobileAperta = "fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white border-r border-gray-200";
  const sidebarMobileChiusa = "hidden fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white border-r border-gray-200";

  const sidebarMobile = isOpenSidebarMobile ? sidebarMobileAperta : sidebarMobileChiusa;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#DF03AF] border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebarMobile}
                className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-[#DF03AF] cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a className="cursor-pointer flex ms-2 md:me-24">
                <div className="bg-white rounded-[3px] me-3">
                  <img src="/logo.png" className="h-8" alt="Logo" />
                </div>
                <span
                  className="self-center text-xl font-semibold sm:text-2xl text-white whitespace-nowrap"
                ><i>Autocar</i></span
                >
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={toggleUserDropDown}
                    type="button"
                    className="cursor-pointer flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/user-profile-foto.PNG"
                      alt="user photo"
                    />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </nav>
      <div
        className={userDropDownClasse}
      >
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900" role="none">name surname</p>
          <p className="text-sm font-medium text-gray-900 truncate" role="none">
            username
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >Dashboard</a
            >
          </li>
          <li>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >Esci</a>
          </li>
        </ul>
      </div>
      <SidebarComponent sidebarClasse={sidebarMobile} />
    </>
  );
};

export default NavbarComponent;