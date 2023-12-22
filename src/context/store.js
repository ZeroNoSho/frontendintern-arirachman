"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const params = useParams();

  const [number, setNumber] = useState(
    params.slug == undefined ? 1 : params.slug
  );
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState("-published_at");
  const [data, setData] = useState();
  console.log();
  const getData = (number, size, sort) => {
    return axios
      .get(
        `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${number}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${sort}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    
    getData(number, size, sort);
  }, [number, size, sort, params]);

  return (
    <Contex.Provider
      value={{
        data,
        size,
        setSize,
        sort,
        setSort,
        number,
        setNumber,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
