import { useDispatch } from "react-redux";
import {
  setDeleting,
  setDeleteError,
  clearDeleteStatus,
} from "../store/songSlice";
import apiClient from "../services/api-client";

const useDeleteMusic = () => {
  const dispatch = useDispatch();

  const deleteMusic = async (musicId) => {
    try {
      dispatch(setDeleting()); // Set the deleting status
      await apiClient.delete(`/yusuf/songs/${musicId}`);
      dispatch(clearDeleteStatus()); // Clear the delete status
    } catch (error) {
      dispatch(setDeleteError(error.message)); // Set the delete error
    }
  };

  return {
    deleteMusic,
  };
};

export default useDeleteMusic;
