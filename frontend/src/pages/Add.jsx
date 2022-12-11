import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const [joke, setJoke] = useState({
    line1: "",
    line2: "",
  });

  function handleChange(e) {
    setJoke((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(joke);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/jokes", joke);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col items-center font-Montserrat pt-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-[20px]">Add new joke</h1>
        <div className='flex w-[80vw] md:w-[600px] flex-col items-center py-4 gap-2'>
          <input
          className="w-[80vw] text-center md:w-[700px] border-2"
            name="line1"
            type="text"
            placeholder="Line One"
            onChange={handleChange}
            value={joke.title}
          ></input>
          <input
          className="w-[80vw] text-center md:w-[700px] border-2"
            name="line2"
            type="text"
            placeholder="Line Two"
            onChange={handleChange}
            value={joke.desc}
          ></input>
          <button className="py-2" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
