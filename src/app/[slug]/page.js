"use client";
import { Contex } from "@/context/store";
import { useContext, useEffect, useState } from "react";
import Card from "@/components/card";
import Pafination from "@/components/pagination";
import Dropdown from "@/components/dropdown";
export default function Home() {
  const { size, sort, data } = useContext(Contex);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="bg-cover clip backdrop-brightness-50  bg-center min-h-screen flex justify-center items-center bg-fixed bg-robo-pattern ">
        <div>
          <h1 className="font-black text-6xl text-center text-white brightness-100">
            Ideas
          </h1>
          <h5 className="text-center text-white brightness-100">
            Where all out great things begin
          </h5>
        </div>
      </div>
      <div className="px-24 pb-14">
        <div className="flex my-8 ml-3 ">
          <p className="text-left w-full m-auto text-gray-600">
            Showing 1 - {size} of {data && data.meta.total}
          </p>
          <div className="flex flex justify-end w-full">
            <div className="flex">
              <p className="my-auto mx-5 text-gray-500">Show Per Page : </p>
              <Dropdown
                first={size}
                arr={[
                  [10, 10, "size"],
                  [20, 20, "size"],
                  [50, 50, "size"],
                ]}
              ></Dropdown>
            </div>

            <div className="flex">
              <p className="my-auto mx-5 text-gray-500">Short By : </p>
              <Dropdown
                first={sort == "-published_at" ? "Newest" : "Oldest news"}
                arr={[
                  ["published_at", "Old news", "sort"],
                  ["-published_at", "Newest", "sort"],
                ]}
              ></Dropdown>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <Card></Card>
        </div>
        <Pafination></Pafination>
      </div>
    </main>
  );
}
