import React, { useState } from "react";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";
import { useNavigate } from "react-router-dom";
import useAllMusic from "../hooks/useAllMusic";

const Home = () => {
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [isSongDetailOpen, setIsSongDetailOpen] = useState(false);

  const { music, isLoading, error } = useAllMusic();
  const navigate = useNavigate();

  const handleSongSelect = (songId) => {
    setSelectedSongId(songId);
  };
  const closeSongDetail = () => {
    setIsSongDetailOpen(false);
  };

  return (
    <div>
      <SongList  />
      <SongDetail/>
      <button onClick={() => navigate("/create")}>add new</button>
    </div>
  );
};

export default Home;
