import React from "react";
import WelcomeBanner from "./components/WelcomeBanner";
import CoursesList from "./components/CoursesList";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5">
      {/* left container */}
      <div className="col-span-2">
        {/* banner */}
        <WelcomeBanner />

        {/* courses list  */}

        <CoursesList/>
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
