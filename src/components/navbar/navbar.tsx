"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const navItems = [
    { label: "Mes projets", url: "/" },
    { label: "LinkedIn", url: "/about" },
    // { label: "Services", url: "/services" },
    // { label: "Contact", url: "/contact" },
  ];
  return (
    <nav className="py-4 px-20 mb-28 flex justify-end ">
      <ul className="flex space-x-8">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3, ease: "easeOut" }}
            className="text-black"
          >
            <Link href={item.url}>{item.label}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;