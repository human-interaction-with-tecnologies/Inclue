import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import variables from "../styles/variables.module.scss";

import {
    AboutIcon,
    ArticleIcon,
    CollapsIcon,
    HomeIcon,
    LogoIcon,
    UsersIcon,
    QuestionsIcon
  } from "./icons";
import { randomUUID } from "crypto";

const menuItems = [
    { id: 1, label: "Inicio", icon: HomeIcon, link: "/", stroke: false },
    { id: 2, label: "Considerações de Design", icon: ArticleIcon, link: "/inclue/considerations", stroke: false },
    { id: 3, label: "Personas", icon: UsersIcon, link: "/inclue/personas", stroke: true },
    { id: 4, label: "Perguntas e Respostas",  icon: QuestionsIcon, link: "/inclue/questions", stroke: false },
    { id: 5, label: "Sobre", icon: AboutIcon, link: "/inclue/about", stroke: false },
];


// Para implmenetar uma página auxiliar, voc~e deve criar aqui o item auxiliar com id do pai e a rota do cpage
const subMenuItem = [
  { id: 2, label: "Considerações de Design", icon: ArticleIcon, link: "/inclue/consideration/[id]" }
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
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-inclue-white-color absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      `sidebar-items flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap`,
      {
        ["active"]: (activeMenu.id === menu.id),
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
      style={{ backgroundColor: variables.primaryColor, transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium", {
                hidden: toggleCollapse,
              })}
              style={{ color: variables.whiteColor }}
            >
              Inclue
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}>
              <CollapsIcon className="fill-inclue-primary-color" />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                <Link href={{pathname: menu.link}} >
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      {
                        menu.stroke ? (
                          <Icon className="icon-stroke" />
                        ) : (
                          <Icon className="icon-fill" />
                        )
                      }
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium"
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