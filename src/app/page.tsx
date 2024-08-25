import Navbar from "@/components/navbar/navbar";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <div className="w-[80%] mx-auto">
        <section>
          <FollowerPointerCard className="ml-20 mb-10">
            <div className="mt-8 text-lg flex items-center">
              <h1 className="text-8xl font-bold flex flex-col">
                <span>BAMANA,</span>
                <span>Dusty Hordofel.</span>
              </h1>
            </div>
          </FollowerPointerCard>
        </section>
        <section className="pl-80">
          <FollowerPointerCard
            greeting={false}
            title={
              <TitleComponent avatar="https://res.cloudinary.com/dgsc66scx/image/upload/v1724616852/dusty/mk1acm0sjy2i1jjjdhv2.jpg" />
            }
          >
            <h2 className="text-5xl font-semibold text-balance leading-snug">
              — un développeur Front-End passionné qui transforme les idées en
              solutions numériques percutantes.
            </h2>
          </FollowerPointerCard>
        </section>
      </div>
      {/* <section className="mt-40">
        <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section> */}
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title?: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="80"
      width="80"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-red-500">{title}</p>
  </div>
);
