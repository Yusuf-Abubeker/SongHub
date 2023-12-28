import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusic } from "./songAction";

const useAllMusic = () => {
  const music = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);
  const error = useSelector((state) => state.songs.error);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchMusic()); 
  }, [dispatch]);

  return {
    music,
    error,
    isLoading,
  };
};

export default useAllMusic;
