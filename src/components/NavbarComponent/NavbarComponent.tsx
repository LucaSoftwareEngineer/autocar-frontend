import SidebarComponent from "../SidebarComponent/SidebarComponent.tsx";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import useTokenCheck from "../../hooks/useTokenCheck.tsx";

const NavbarComponent = () => {
  useTokenCheck();
  const navigate = useNavigate();

  const [isOpenUserDropDownMenu, setisOpenUserDropDownMenu] = useState(false);
  const [isOpenSidebarMobile, setisOpenSidebarMobile] = useState(true);

  const toggleUserDropDown = () => {
    setisOpenUserDropDownMenu(!isOpenUserDropDownMenu);
  };

  const toggleSidebarMobile = () => {
    setisOpenSidebarMobile(!isOpenSidebarMobile);
  };

  const userDropDownClasseChiuso =
    "fixed my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm absolute z-50 top-[50px] right-0 hidden";
  const userdropDownClasseAperto =
    "fixed my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm absolute z-50 top-[50px] right-0";

  const userDropDownClasse = isOpenUserDropDownMenu
    ? userdropDownClasseAperto
    : userDropDownClasseChiuso;

  const sidebarMobileAperta =
    "fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white border-r border-gray-200";
  const sidebarMobileChiusa =
    "hidden fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white border-r border-gray-200";

  const sidebarMobile = isOpenSidebarMobile
    ? sidebarMobileAperta
    : sidebarMobileChiusa;

  const logoutHandler = () => {
    toast.success("Logout effettuato correttamente!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const dashboardHandler = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-[#DF03AF]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebarMobile}
                className="inline-flex cursor-pointer items-center rounded-lg p-2 text-sm text-white hover:bg-[#DF03AF] focus:ring-2 focus:ring-gray-200 focus:outline-none sm:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="h-6 w-6"
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
              <a className="ms-2 flex cursor-pointer md:me-24">
                <div className="me-3 rounded-[3px] bg-white">
                  <img src="/logo.png" className="h-8" alt="Logo" />
                </div>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white sm:text-2xl">
                  <i>Autocar</i>
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="ms-3 flex items-center">
                <div>
                  <button
                    onClick={toggleUserDropDown}
                    type="button"
                    className="flex cursor-pointer rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
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
      <div className={userDropDownClasse}>
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900" role="none">
            name surname
          </p>
          <p className="truncate text-sm font-medium text-gray-900" role="none">
            username
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <a
              onClick={dashboardHandler}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              onClick={logoutHandler}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Esci
            </a>
          </li>
        </ul>
      </div>
      <SidebarComponent sidebarClasse={sidebarMobile} />
      <ToastContainer />
    </>
  );
};

export default NavbarComponent;
