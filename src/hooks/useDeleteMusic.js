import { useDispatch, useSelector } from "react-redux";
import {
  setDeleting,
  setDeleteError,
  clearDeleteStatus,
} from "../store/reducers/songSlice";
import apiClient from "../services/api-client";

const useDeleteMusic = () => {
  const dispatch = useDispatch();
  const isDeleting = useSelector((s) => s.songs.isDeleting);


  const deleteMusic = async (musicId) => {
    try {
      dispatch(setDeleting()); // Set the deleting status
      await apiClient.delete(`/yusuf/songs/${musicId}`);
      dispatch(clearDeleteStatus()); // Clear the delete status
      window.location.reload();
    } catch (error) {
      dispatch(setDeleteError(error.message)); // Set the delete error
    }
  };

  return {
    deleteMusic,
    isDeleting,
  };
};

export default useDeleteMusic;
