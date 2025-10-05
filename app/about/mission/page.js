import Button from "@/app/components/Button";
import React from "react";
import picture from "@/public/mission.jpg";
import Image from "next/image";

export const metadata = {
  title: "Mission page",
  description: "mission page description",
};

export default function Mission() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Our Mission</h1>
      <p className="mt-4">
        Our mission is to empower developers by providing the best tools and
        resources for building modern web applications.
      </p>
      <Button />
      <div className="w-[400px]">
      <Image placeholder="blur" alt="Our mission" src={picture}></Image>
      </div>
    </div>
  );
}
