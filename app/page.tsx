"use client"
import Image from "next/image";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "framer-motion";


export default function Home() {
 
  return (
    <main>
      {/* <Button color="gray" variant="surface" > <Link href="/issues/new">new Issue </Link> </Button> */}
      
      {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <Link href="/issues/new">new Issue </Link>
        </button>  */}
        
         <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Create
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        <Link href="/issues/new">new Issue </Link>
        </button>
      
      </motion.div>
    </AuroraBackground>
    
    
        
    </main>
  );
}
