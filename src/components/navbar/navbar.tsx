"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const navItems = [
    { label: "Read.cv", url: "https://read.cv/hordofel" },
    { label: "Github", url: "https://github.com/Dusty-Hordofel" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/dusty-hordofel-bamana-08389310a/",
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="py-4 flex justify-end ">
        <ul className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              className="relative inline-block text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              <Link href={item.url} target="_blank">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
