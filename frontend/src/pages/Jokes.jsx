import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    async function fetchAllJokes() {
      try {
        const res = await axios.get("http://localhost:5000/jokes");
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
      await axios.delete("http://localhost:5000/jokes/" + id);
      window.location.reload();
    } catch (error) {}
  }
  return (
    <div className="flex flex-col items-center pt-4  font-Montserrat">
      <h1 className=" text-[40px] font-bold">Two-Line Jokes</h1>

      <div className="flex w-[80vw] flex-col items-center justify-center md:w-[600px]">
        {jokes.map((joke) => (
          <div key={joke.id}>
            <div className="w-[250px] break-words py-4 text-center md:w-[700px] ">
              <div className="py-4  font-light ">
                <p className=" pb-2">{joke.line1}</p>
                <p className="">{joke.line2}</p>
              </div>
              <div className="relative flex flex-row justify-center gap-8">
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
            <div className="relative my-4 h-[1px] w-full bg-black" />
          </div>
        ))}
      </div>
      <button className="py-4 pb-8">
        <Link to="/add">Add new joke</Link>
      </button>
    </div>
  );
}
