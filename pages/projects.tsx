"use client";
import React, { useEffect } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Cursor from "@/components/cursor";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";

export const projects = [
  {
    title: "UI Component Manager",
    description: "Full stack web application and package manager, where users can upload components, and import components through the package manager CLI tool.",
    link: "https://github.com/noahk004/ui-component-manager",
    symbols: ["react", "tailwind_css", "postgresql"]
  },
  {
    title: "CodeBattles",
    description: "Full stack web application where users can compete against friends or online to complete coding challenges.",
    link: "https://github.com/justinsiek/CodeBattles",
    symbols: ["react", "tailwind_css", "postgresql", "python"]
  },
  {
    title: "Sonder",
    description: "Full stack social media platform that preserves anonymity through blockchain systems",
    link: "https://github.com/justinsiek/Sonder",
    symbols: ["react", "tailwind_css", "metamask"]
  },
  {
    title: "Stock Pattern Indicator",
    description: "Full stack web application that extracts common stock patterns, and alerts user when patterns are confirmed within tracked stocks.",
    link: "https://github.com/justinsiek/StockPatternIndicator",
    symbols: ["react", "tailwind_css", "postgresql", "python"]
    
  },
  {
    title: "Stock Analysis Viewer",
    description: "Interface that displays candlestick chart of a stock, highlights major drops and gains, summarizes and displays causes",
    link: "https://github.com/justinsiek/Stock-Viewer",
    symbols: ["pytorch", "react", "tailwind_css", "python"]
  },
  {
    title: "Request and Signoff Form",
    description: "Advanced Multi Step Form Which Allows For Requests And Various levels of approvals, with authentication",
    link: "github.com/justinsiek/",
    symbols: ["react", "tailwind_css", "postgresql", "python"]
  },
];


export function Projects() {

  return (
    <div className="h-screen w-screen flex flex-col sm:justify-start lg:justify-center items-center cursor-none overflow-hidden" >
    <div className="lg:h-3/4 sm:h-[86%] bg-black flex flex-col items-center justify-center relative lg:w-2/3
      lg:border-solid lg:border-2 lg:border-black relative sm:h-screen sm:w-full sm:border-none sm:p-12 lg:p-0">
    <ShootingStars />
    <StarsBackground />
    <div className="absolute top-0 left-0 relative right-0 flex flex-col h-full w-full pt-4 px-4 mix-blend-difference items-center">
      <div className="w-full relative px-2">
        <h1 className="lg:text-7xl text-white font-integralbold -translate-y-2 z-50 sm:text-8xl sm:mt-8 lg:mt-0">PROJECTS</h1>
        <div className="absolute right-4 top-1">
        <Link href='/'>
        <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full lg:before:h-1 before:origin-right
              before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0
              font-integral lg:text-2xl cursor-none text-white sm:text-6xl sm:before:h-2 sm:before:translate-y-4 sm:mt-8 lg:mt-1 lg:mr-0
              lg:before:translate-y-0.5'>
                HOME</h1>
        </Link>
        </div>
      </div>
      
      
      <div className="flex flex-col items-center h-full justify-center">
        <HoverEffect items={projects} />
      </div>
    </div>
    </div>
    <Cursor />
    </div>
  );
}

export default Projects;