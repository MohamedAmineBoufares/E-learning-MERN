import React from "react";
import Header from "../../components/Client/Header/Header";
import CourseContent from "../../components/Client/CourseContent/CourseContent";
import CourseContentFooter from "../../components/Client/CourseContentFooter/CourseContentFooter";

function Course() {
  return (
    <div>
      <Header />
      <CourseContent />
      <CourseContentFooter />
    </div>
  );
}

export default Course;
