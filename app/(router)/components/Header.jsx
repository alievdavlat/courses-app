import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 bg-primary/5 flex justify-between">
      <div className="flex gap-2 bg-transparent border  rounded-md p-2">
        <Search className="h-5 w-5 text-muted-foreground" role="button" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent h-full"
        />
      </div>
      {/* get started button */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <BellDot />
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
