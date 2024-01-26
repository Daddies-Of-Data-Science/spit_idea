import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      
      <h3 className=" justify-center font-bold">Dashboard</h3>
      <Cards />
      <Table />
      
      
    </div>
  );
};

export default MainDash;
