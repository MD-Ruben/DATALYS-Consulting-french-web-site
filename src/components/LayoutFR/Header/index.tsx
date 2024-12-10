"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import menuData from "./menuData"

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar)
  })

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  const usePathName = usePathname()

  // Fonction pour vérifier si nous sommes sur une page d'expertise
  const isExpertisePage = () => {
    return usePathName.includes('/notreexpertise/')
  }

  // Ajouter cet état pour gérer l'ouverture du dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-96 max-w-full px-4">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <img
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={320}
                  height={180}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-center px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[270px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            target={menuItem.newTab ? "_blank" : "_self"}
                            rel={menuItem.newTab ? "noopener noreferrer" : ""}
                            className={`font-title flex py-2 text-sm font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-[15px] ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-[#f5c034]"
                                : menuItem.title === "Notre Expertise" && isExpertisePage()
                                ? "text-[#f5c034]"
                                : "text-dark hover:text-white dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-sm font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-[15px] ${
                                menuItem.title === "Notre Expertise" && isExpertisePage()
                                  ? "text-[#f5c034]"
                                  : "text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                              }`}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="font-title block rounded py-2.5 text-sm font-semibold text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Dropdown 
                  isOpen={isDropdownOpen}
                  onOpenChange={setIsDropdownOpen}
                >
                  <DropdownTrigger>
                    <Button 
                      variant="light" 
                      className="min-w-unit-0 p-0"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 36 36"
                        >
                          <path
                            fill="#ed2939"
                            d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z"
                          />
                          <path
                            fill="#002495"
                            d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"
                          />
                          <path fill="#eee" d="M12 5h12v26H12z" />
                        </svg>
                        <span className="dark:text-white/70">FR</span>
                        <svg 
                          className={`h-4 w-4 text-black transition-transform duration-200 dark:text-white/70 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          height="24" 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          width="24"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Language selection">
                    <DropdownItem>
                      <Link
                        href="https://en.datalysconsulting.com/"
                        className="flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 36 36"
                        >
                          <path
                            fill="#eee"
                            d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"
                          />
                          <path
                            fill="#ce1124"
                            d="M21 5h-6v10H0v6h15v10h6V21h15v-6H21z"
                          />
                        </svg>
                        <span className="dark:text-white/70">EN</span>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
