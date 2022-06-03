import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdClear } from "react-icons/md";

export default function Home() {
  const [cycles, setCycles] = useState(0);

  return (
    <div>
      <Head>
        <title>Simple Counter</title>
        <meta name="description" content="Counter to add , subtract or clear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-50">
        <div className="bg-red-50 border-2 border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-black hover:translate-x-1 ">
          <h1 className="text-3xl font-bold text-center">
            Sessions Completed : <span>{cycles}</span>
          </h1>
          <div className="grid grid-cols-3 gap-3 ">
            <div
              className="m-4 p-4 border-2 bg-white border-solid rounded-lg shadow-lg hover:shadow-black hover:translate-x-1"
              onClick={() => setCycles(cycles + 1)}
            >
              <AiOutlinePlus size={50} />
            </div>
            <div
              className="m-4 p-4 border-2 bg-white border-solid rounded-lg shadow-lg hover:shadow-black hover:translate-x-1"
              onClick={() => setCycles(0)}
            >
              <MdClear size={50} />
            </div>
            <div
              className="m-4 p-4 border-2 bg-white border-solid rounded-lg shadow-lg hover:shadow-black hover:translate-x-1"
              onClick={() => setCycles(cycles > 0 ? cycles - 1 : cycles)}
            >
              <AiOutlineMinus size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
