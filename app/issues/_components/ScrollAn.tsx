"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useSession } from "next-auth/react";

export  default function HeroScrollDemo() {
  const{status} = useSession();
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-black">
            Struggling to Keep Tabs on Issues? <br />
            <span className=" text-3xl font-normal">
            Introducing Our Sleek and Efficient 
            </span>
            <br/>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Issue Tracker
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`https://www.nuclino.com/img/solutions/issue-tracking-software-zoho-bugtracker.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="flex flex-col justify-center mb-16 mx-auto">
        <div>
      <h1 className="text-4xl font-semibold text-white dark:text-black text-center">
              Create new Issue  </h1>
              </div>
              <div className="flex justify-center mt-2">
     {status === 'unauthenticated' && <Button color="cyan" variant="soft"> <Link href="/api/auth/signin">Login</Link> </Button>}
     {status === 'authenticated' && <Button color="cyan" variant="soft"> <Link href="/issues/new">New issue</Link> </Button>}
      </div>
      </div>
    </div>
  );
}

