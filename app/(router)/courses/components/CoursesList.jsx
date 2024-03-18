"use client";
import GlobalApi from "@/app/utils/GlobalApi";
import React from "react";

const CoursesList = () => {
  const getCourses = async () => {
    GlobalApi.getAllCourseList()
      .then((res) => console.log(res))
      .catch((err) => consoleQ.log(err));
  };

  React.useEffect(() => {
    getCourses();
  }, []);

  return <div>CoursesList</div>;
};

export default CoursesList;
