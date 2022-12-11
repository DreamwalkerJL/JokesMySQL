import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Update() {
  const location = useLocation();
  const navigate = useNavigate();
  const jokeId = location.pathname.split("/")[2];
  const prevLines = location.state;
  console.log(prevLines);

  const [joke, setjoke] = useState({
    line1: prevLines.line1,
    line2: prevLines.line2,
  });

  function handleChange(e) {
    setjoke((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(joke);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.put("http://localhost:5000/jokes/" + jokeId, joke);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col items-center pt-4 font-Montserrat">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-[20px] ">Update the joke</h1>
        <div className="flex flex-col items-center  gap-2 py-4 ">
          <input
            className="w-[80vw] text-center md:w-[700px] border-2"
            name="line1"
            type="text"
            placeholder="Line One"
            onChange={handleChange}
            value={joke.line1}
          ></input>
          <input
            className="w-[80vw] text-center md:w-[700px] border-2"
            name="line2"
            type="text"
            placeholder="Line Two"
            onChange={handleChange}
            value={joke.line2}
          ></input>
          <button className="py-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
