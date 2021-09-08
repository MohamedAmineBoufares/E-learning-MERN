import React from "react";
import HeaderAdmin from "../../components/Admin/HeaderAdmin/HeaderAdmin";
import Title from "../../components/Admin/Title/Title";
import CardAdmin from "../../components/Admin/CardAdmin/CardAdmin";

function Dashboard({ courses }) {
  return (
    <div>
      <HeaderAdmin />
      <Title />
      {courses.map(({ courseName, courseImageURL, coursePrice }, i) => (
        <CardAdmin key={i} src={courseImageURL} courseName={courseName} coursePrice={coursePrice}/>
      ))}
    </div>
  );
}

export default Dashboard;
