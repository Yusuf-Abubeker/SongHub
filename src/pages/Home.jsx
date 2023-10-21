import React from "react";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";
import { useNavigate } from "react-router-dom";
import useAllMusic from "../hooks/useAllMusic";

const Home = () => {

  const { music, isLoading, error } = useAllMusic();
  const navigate = useNavigate();

  return (
    <div>
      <SongList  />
      <SongDetail/>
      <button onClick={() => navigate("/create")}>add new</button>
    </div>
  );
};

export default Home;
