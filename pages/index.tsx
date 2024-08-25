/* TODO: ADD LOADING ANIMATION */

"use client";
import React, { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Cursor from "@/components/cursor";
import Link from "next/link";
import { motion } from "framer-motion";

export function Index() {

  return (
    <>
    <div className="h-screen w-screen flex flex-col sm:justify-start lg:justify-center items-center cursor-none overflow-hidden" >
    <div className="lg:h-3/4 sm:h-[87.5%] bg-black flex flex-col items-center justify-center relative lg:w-2/3 sm:w-full
      lg:border-solid lg:border-2 lg:border-black sm:border-none">
      <ShootingStars />
      <StarsBackground />
        <h1 className="lg:text-8xl sm:text-9xl text-white font-integralbold lg:-translate-y-2 sm:-translate-y-4 mix-blend-difference">JUSTIN SIEK</h1>
      <div className="absolute bottom-0 left-0 right-0 flex h-1/2 w-full bg-white mix-blend-difference">
        <div className='absolute flex flex-grow h-1/5 inset-x-0 bottom-0 text-black justify-between items-center px-4 text-xl z-0'>
          <div className='flex-grow text-center font-integral'>
            <div className='inline-block'>
              <Link href='/about'>
                <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full lg:before:h-1 before:origin-right
                  before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 cursor-none
                  sm:text-5xl lg:text-2xl sm:before:h-2 sm:before:translate-y-4 lg:before:translate-y-0'>
                  ABOUT</h1>
              </Link>
            </div>
          </div>
          <div className='flex-grow text-center font-integral'>
            <div className='inline-block'>
              <Link href='/projects'>
                <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full lg:before:h-1 before:origin-right
                  before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 cursor-none
                  sm:text-5xl lg:text-2xl sm:before:h-2 sm:before:translate-y-4 lg:before:translate-y-0'>
                  PROJECTS</h1>
              </Link>
            </div>
          </div>
          <div className='flex-grow text-center font-integral'>
            <div className='inline-block'>
            <Link href='/contact'>
              <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full lg:before:h-1 before:origin-right
                before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 cursor-none
                sm:text-5xl lg:text-2xl sm:before:h-2 sm:before:translate-y-4 lg:before:translate-y-0'>
                CONTACT</h1>
            </Link>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <Cursor />
    </div>
    </>
  );
}

export default Index;
