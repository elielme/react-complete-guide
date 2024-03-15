import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ color: "green" }}>Shoogi's website</h1>
      <button onClick={() => navigate("/")}>Log out</button>
    </div>
  );
};

export default Home;
