import React from "react";
import WelcomeBanner from "./components/WelcomeBanner";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5">
      {/* left container */}
      <div className="col-span-2">
        {/* banner */}
        <WelcomeBanner />
      </div>

      {/* right container */}
      <div>
        {/* right section */}
        right section
      </div>
    </div>
  );
};

export default page;