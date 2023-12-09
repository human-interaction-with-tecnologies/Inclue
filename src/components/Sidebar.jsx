import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

import {
    ArticleIcon,
    CollapsIcon,
    HomeIcon,
    LogoIcon,
    LogoutIcon,
    UsersIcon,
    QuestionsIcon,
  } from "./icons";

const menuItems = [
    { id: 1, label: "Inicio", icon: HomeIcon, link: "/" },
    { id: 2, label: "Considerações de Design", icon: ArticleIcon, link: "/inclue/considerations" },
    { id: 3, label: "Personas", icon: UsersIcon, link: "/inclue/personas" },
    { id: 4, label: "Perguntas e Respostas",  icon: ArticleIcon, link: "/inclue/quenstions" },
    { id: 5, label: "Sobre", icon: ArticleIcon, link: "/inclue/about" },
];


// Para implmenetar uma página auxiliar, voc~e deve criar aqui o item auxiliar com id do pai e a rota do cpage
const subMenuItem = [
  { id: 2, label: "Considerações de Design", icon: ArticleIcon, link: "/inclue/consideration" },
];

const menus = [].concat(menuItems, subMenuItem);

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menus.find((menu) => menu.link === router.pathname),
    [router.pathname]
    
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: (activeMenu.id === menu.id),
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Inclue
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}>
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={{pathname: menu.link}} >
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;