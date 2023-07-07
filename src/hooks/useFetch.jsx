import React, { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [loading, setLoading] = useState("null");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    setLoading(true);
    try {
      const data = await fetch(endpoint);
      const response = await data.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
