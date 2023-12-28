import { useDispatch, useSelector } from "react-redux";
import { deleteMusic } from "./songAction";

const useDeleteMusic = () => {
  const dispatch = useDispatch();
  const isDeleting = useSelector((s) => s.songs.isDeleting);

  const deleteSingleMusic = async (musicId) => {
    dispatch(deleteMusic(musicId));
  };

  return {
    deleteSingleMusic,
    isDeleting,
  };
};

export default useDeleteMusic;
