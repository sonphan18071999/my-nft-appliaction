"use client";
import { Button, Typography } from "antd";
import React from "react";
import ShoppingCartModal from "@/components/commons/shopping-cart-modal/shopping-cart-modal";

const Header = () => {
  const menuConfigs: MenuConfig[] = [
    { name: "Home", link: "/home" },
    { name: "About Us", link: "/about-us" },
    { name: "Our Team", link: "/team" },
    { name: "Market Place", link: "/market" },
    { name: "Road Map", link: "/roadmap" },
    { name: "White Paper", link: "/whitepaper" },
  ];

  return (
    <>
      <header className="bg-gray-900 text-white flex justify-center items-center">
        <div className="container flex justify-between items-center py-4 mx-2 max-w-[1574px]">
          <nav className="hidden md:flex space-x-6">
            {menuConfigs.map((menu, index) => (
              <a
                key={index}
                href={menu.link}
                className="relative text-lg font-medium hover:text-gray-400 transition duration-300"
              >
                {menu.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <section className="flex flex-row gap-8">
            <div>
              <ShoppingCartModal />
            </div>
            <Button className="secondary-btn">
              <Typography className="text-white">Login</Typography>
            </Button>
          </section>
        </div>
      </header>
    </>
  );
};

interface MenuConfig {
  name: string;
  link: string;
}

export default Header;
