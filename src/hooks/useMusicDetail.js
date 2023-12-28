import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongDetails } from "./songAction";

const useMusicDetail = (songId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongDetails(songId));
  }, [dispatch, songId]);

  return {
    song: useSelector((state) => state.songDetail.song),
    audioUrl: useSelector((state) => state.songDetail.audioUrl),
    isLoading: useSelector((state) => state.songDetail.isLoading),
    error: useSelector((state) => state.songDetail.error),
  };
};

export default useMusicDetail;
