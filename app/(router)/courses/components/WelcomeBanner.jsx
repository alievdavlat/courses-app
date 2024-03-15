import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-primary/10 rounded-xl p-5">
      <Image src={"/panda.png"} alt="panda" width={100} height={100} />
      <div>
        <h2 className="font-bold text-[27px] text-muted-foreground">
          Welcome to <span className="text-blue-500">Aliev</span> Academy
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
