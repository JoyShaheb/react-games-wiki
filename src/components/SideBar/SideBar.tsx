import React, { useState } from "react";
import NavLink from "./NavLink";
import {
  HomeIcon,
  ChartPieIcon as DashboardIcon,
  DocumentChartBarIcon as ReportTemplateIcon,
  FolderIcon as DocumentsIcon,
  UserCircleIcon as UserIcon,
  ShoppingBagIcon as ProductIcon,
  ArrowRightOnRectangleIcon as SignoutIcon,
  ArrowLeftOnRectangleIcon as SigninIcon,
  UserPlusIcon as SignupIcon,
  XMarkIcon as CrossIcon,
  Bars3Icon as MenuIcon,
  PhoneXMarkIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="w-7" />
      </button>
      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !isSidebarOpen && "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            type="button"
            onClick={closeSidebar}
            className="inline-flex items-center ml-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Close sidebar</span>
            <CrossIcon className="w-6" />
          </button>
          <ul className="space-y-2">
            <NavLink
              to="/"
              label="Home"
              isPro={false}
              onClick={closeSidebar}
              Icon={<HomeIcon className="w-6" />}
            />
            <NavLink
              to="/games"
              label="Games"
              isPro={false}
              Icon={<DashboardIcon className="w-6" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/documents"
              label="Documents"
              isPro={false}
              Icon={<DocumentsIcon className="w-6" />}
              onClick={closeSidebar}
            />
            {/*
            <NavLink
              to="/report-templates"
              label="Report Templates"
              isPro={false}
              Icon={<ReportTemplateIcon className="w-6" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/User"
              label="User"
              isPro={false}
              Icon={<UserIcon className="w-6" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/products"
              label="Products"
              isPro={false}
              Icon={<ProductIcon className="w-6" />}
              onClick={closeSidebar}
            /> */}
            {/* {!userID && (
              <>
                <NavLink
                  to="/login"
                  label="Login"
                  isPro={false}
                  Icon={<SigninIcon className="w-6" />}
                  onClick={closeSidebar}
                />
                <NavLink
                  to="/signup"
                  label="Sign up"
                  isPro={false}
                  Icon={<SignupIcon className="w-6" />}
                  onClick={closeSidebar}
                />
              </>
            )} */}
            {/* 
            {userID && (
              <NavLink
                to="/login"
                label="Sign Out"
                isPro={false}
                Icon={<SignoutIcon className="w-6" />}
                onClick={() => {
                  dispatch(logout());
                  closeSidebar();
                }}
              />
            )} */}
          </ul>
          <div
            id="dropdown-cta"
            className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              The App is in beta mode, feel free to suggest us for new features.
            </p>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Sidebar;
