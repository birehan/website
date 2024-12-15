"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Certificates", href: "/certificates" },
  { name: "Paper Replicates", href: "/papers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="min-h-[55.95px] border-b  ">
      <nav
        aria-label="Global"
        className="h-full mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 "
      >
        <div className="flex lg:flex-1 self-center text-center">
          <Link to="/" className=" text-[1.25rem] spacing-1 font-[549]">
            <span className="sr-only">Your Company</span>
            Birehan Zewde
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 ">
              {item.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0  " />
        <Dialog.Panel
          className={`dialog  fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto px-6 py-6 sm:max-w-sm `}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              Birehan Zewde
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7"
                  >
                    {item.name}
                  </a>
                ))}
                {/* Theme Toggle Button in Mobile */}
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn mt-4 w-full text-center"
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
