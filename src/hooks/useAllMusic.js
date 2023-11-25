import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSongs, setSongsLoading, setSongError } from "../store/reducers/songSlice";
import apiClient from "../services/api-client";

const useAllMusic = () => {
  const music = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);
  const error = useSelector((state) => state.songs.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setSongsLoading()); // Set loading status

      try {
        const response = await apiClient.get("/yusuf/songs");
        dispatch(setSongs(response.data)); // Set music data
      } catch (error) {
        dispatch(setSongError(error.message)); // Set error
      }
    };

    fetchData();
  }, [dispatch]);

  return {
    music,
    error,
    isLoading,
  };
};

export default useAllMusic;
