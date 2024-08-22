"use client";
import React, { useEffect } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Cursor from "@/components/cursor";


export function Index() {

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center cursor-none" >
    <div className="h-3/4 bg-black flex flex-col items-center justify-center relative w-2/3
      border-solid border-2 border-black">
      <ShootingStars />
      <div>
        <h1 className="text-8xl text-white font-integralbold -translate-y-2 z-50">JUSTIN SIEK</h1>
      </div>
      
      <StarsBackground />
    <div className="absolute bottom-0 left-0 right-0 flex h-1/2 w-full bg-white mix-blend-difference">
      <div className='absolute flex flex-grow h-1/5 inset-x-0 bottom-0 text-black justify-between items-center px-4 text-xl z-0'>
          <div className='flex-grow text-center font-integral'>
            <div className='inline-block'>
            <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
              before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0'>
                ABOUT</h1>
            </div>
          </div>
          <div className='flex-grow text-center font-integral'>
            <div className='inline-block'>
              <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
                before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0'>
                PROJECTS</h1>
            </div>
          </div>
          <div className='flex-grow text-center font-integral'>
            <div className='inline-block'>
            <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right
              before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0'>
                CONTACT</h1>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <Cursor />
    </div>
  );
}

export default Index;
