"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  X } from "lucide-react";
import ArrowRight from "@/assets/svg/arrow.svg";
import { menuItems, socialLinks } from "@/constance/home";
import Link from "next/link";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-overlay/80 backdrop-blur-lg"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative z-10 flex flex-col justify-between h-full p-8 md:px-16"
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="w-12  h-12 rounded-full bg-secondary/30 flex items-center justify-center text-secondary hover:text-hero-dark-foreground hover:border-hero-dark-foreground transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col mt-10">
              <ul className="space-y-0">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="border-b border-menu-border "
                  >
                    <a
                      href={item.href}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={onClose}
                      className="group flex items-center justify-between py-5 md:py-6 transition-colors duration-300"
                    >
                      <span
                        className={`font-serif text-3xl md:text-5xl transition-all duration-300 ${
                          hoveredItem === null || hoveredItem === item.label
                            ? "text-secondary"
                            : "text-muted-foreground/40"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ArrowRight
                        className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
                          hoveredItem === item.label
                            ? "text-secondary translate-x-0 opacity-100"
                            : "text-muted-foreground -translate-x-2 opacity-50"
                        }`}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-6 mb-5"
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                  inline-flex items-center justify-center
                  leading-none
                  overflow-visible
                  text-muted-foreground
                  hover:text-hero-dark-foreground
                  transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 text-secondary shrink-0" />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
