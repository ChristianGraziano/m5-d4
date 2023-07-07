import React, { createContext, useEffect, useState } from "react";

export const getBooksContext = createContext();

export const GetBookProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [arrayBook, setArrayBook] = useState(null);

  const getBookApi = async () => {
    setIsLoading(true);

    try {
      const data = await fetch("https://epibooks.onrender.com/");
      const response = await data.json();
      setArrayBook(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookApi();
  }, []);

  return (
    <getBooksContext.Provider
      value={{ arrayBook, setArrayBook, getBookApi, isLoading }}
    >
      {children}
    </getBooksContext.Provider>
  );
};
