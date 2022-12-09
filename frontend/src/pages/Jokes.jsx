import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    async function fetchAllJokes() {
      try {
        const res = await axios.get("http://localhost:8800/jokes");
        setJokes(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllJokes();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:8800/jokes/" + id);
      window.location.reload();
    } catch (error) {}
  }
  return (
    <div className="flex flex-col items-center font-Montserrat  pt-4">
      <h1 className=" text-[40px] font-bold">Two-Line Jokes</h1>

      <div className="flex w-[80vw] md:w-[600px] flex-col justify-center items-center">
        {jokes.map((joke) => (
          <div key={joke.id}>
            <div className="w-[250px] md:w-[700px] text-center break-words py-4 ">
              <div className="py-4  font-light ">
                <p className=" pb-2">{joke.line1}</p>
                <p className="">{joke.line2}</p>
              </div>
              <div className="relative flex flex-row gap-8 justify-center">
                <button>
                  <Link to={`/update/${joke.id}`} state={joke}>
                    <FaEdit />
                  </Link>
                </button>
                <button onClick={() => handleDelete(joke.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="relative bg-black w-full h-[1px] my-4"/>
          </div>
        ))}
      </div>
      <button className="pb-8 py-4">
        <Link to="/add">Add new joke</Link>
      </button>
    </div>
  );
}
