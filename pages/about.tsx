
"use client";
import React, { useEffect } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Cursor from "@/components/cursor";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export function About() {

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center cursor-none" >
    <div className="h-3/4 bg-black flex flex-col items-center justify-center relative w-2/3
      border-solid border-2 border-black relative">
    <ShootingStars />
    <StarsBackground />
    <div className="absolute top-0 left-0 relative right-0 flex flex-col h-full w-full pt-4 px-4 bg-white mix-blend-difference items-center">
      <div className="w-full relative mt-2 px-2">
        <h1 className="text-7xl text-black font-integralbold -translate-y-2 z-50">About ME</h1>
        <div className="absolute right-4 top-1">
        <Link href='/'>
        <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
              before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0
              font-integral text-2xl cursor-none'>
                HOME</h1>
        </Link>
        </div>
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center mb-10">
        <h1 className="text-3xl font-integralbold text-black">Justin Siek</h1>
        <h1 className="text-2xl font-integral text-black">Software Developer</h1>
        <h1 className="text-2xl font-integral text-black">University of California, Irvine</h1>
        <h1 className="text-2xl font-integral text-black">Computer Science</h1>
        <h1 className="text-2xl font-integral text-black">Class of 2026</h1>
        
      </div>
    </div>
    </div>
    <Cursor />
    </div>
  );
}


export default About;