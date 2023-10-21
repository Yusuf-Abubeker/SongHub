import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
  setSongDetail,
  setSongDetailLoading,
  setSongDetailError,
} from "../store/songDetailSlice";
import apiClient from "../services/api-client";

const useMusicDetail = (songId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        dispatch(setSongDetailLoading()); // Set loading status

        const songResponse = await apiClient.get(`/yusuf/songs/${songId}`);

        let audioUrl = null;
        if (songResponse.data.songFile) {
          const audioResponse = await apiClient.get(`/yusuf/songs/${songId}/audio`, {
            responseType: "blob",
          });

          const blob = new Blob([audioResponse.data], {
            type: audioResponse.headers["content-type"],
          });
          audioUrl = URL.createObjectURL(blob);
        }

        dispatch(setSongDetail({ song: songResponse.data, audioUrl }));
      } catch (error) {
        dispatch(setSongDetailError(error.message)); // Set error status
      }
    };

    fetchSongDetails();
  }, [dispatch, songId]);

  return {
    song: useSelector((state) => state.songDetail.song),
    audioUrl: useSelector((state) => state.songDetail.audioUrl),
    isLoading: useSelector((state) => state.songDetail.isLoading),
    error: useSelector((state) => state.songDetail.error),
  };
};

export default useMusicDetail;
