import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import NavBar from "./NavBar";

const BookDetails = () => {
  const { asin } = useParams();

  const { data, loading, error } = useFetch("https://epibooks.onrender.com/");

  return (
    <>
      <NavBar />
      <h1>ciao libro {asin}</h1>;
    </>
  );
};

export default BookDetails;
