import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import {
  HomeIcon,
  XMarkIcon as CrossIcon,
  Bars3Icon as MenuIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import ThemeSwitch from "../Switch/ThemeSwitch";
import { themeSwitch, RootState } from "../../store";
import Alert from "../Alert/Alert";
import { useSelector, useDispatch } from "react-redux";
import { ThemeTypesEnum } from "../../types/enum";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const theme = useSelector((state: RootState) => state.system.mode);

  useEffect(() => {
    document.documentElement.classList.toggle(
      ThemeTypesEnum.DARK,
      theme === ThemeTypesEnum.DARK,
    );
  }, [theme]);

  const handleChangeTheme = () =>
    dispatch(
      themeSwitch(
        theme === ThemeTypesEnum.LIGHT
          ? ThemeTypesEnum.DARK
          : ThemeTypesEnum.LIGHT,
      ),
    );

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
          !isSidebarOpen ? "-translate-x-full" : ""
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
          <div className="">
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
                Icon={<PuzzlePieceIcon className="w-6" />}
                onClick={closeSidebar}
              />
              <NavLink
                to="/platforms"
                label="Platforms"
                isPro={false}
                Icon={<CpuChipIcon className="w-6" />}
                onClick={closeSidebar}
              />
              <ThemeSwitch theme={theme} onClick={handleChangeTheme} />

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
            <Alert />
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Sidebar;
