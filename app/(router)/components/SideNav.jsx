import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 bg-primary/5 shadow-sm border h-screen">
      <div className="flex gap-2 items-center justify-center">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        <div className="hidden">
          <span className="text-[25px]  font-bold mt-1 animate-pulse text-red-700">
            c
          </span>
          <span className="text-[18px] font-semibold animate-pulse">
            ourses
          </span>
        </div>
      </div>

      <hr className="mt-7" />
      {/* Menu */}
      <div className="mt-8 w-full">
        {menu.map((item) => (
          <div
            key={item.id}
            className=" group flex gap-3 mt-2 p-3 text-[20px] items-center text-muted-foreground cursor-pointer dark:hover:bg-secondary hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200 ">
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
