import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { FaMusic } from "react-icons/fa";
import { selectSong, setIsSongDetailOpen } from "../store/reducers/songSlice";
import SongDetail from "./SongDetail";
import useAllMusic from "../hooks/useAllMusic";

const MusicPage = () => {
  const sSongDetailOpen = useSelector((s) => s.songs.isSongDetailOpen);
  const { music, error, isLoading } = useAllMusic();
  const dispatch = useDispatch();

  const openSongDetail = (songId) => {
    dispatch(selectSong(songId))
    dispatch(setIsSongDetailOpen());
  };

  const closeSongDetail = () => {
    dispatch(selectSong(null))
    dispatch(setIsSongDetailOpen());
  };

  return (
    <Container>
      <Header>
        <FaMusic />
        <h1>All Music</h1>
      </Header>

      {error && <p>Error: {error}</p>}
      {isLoading && <p>loading ...</p>
      {music && (
        <List>
          {music.map((song, index) => (
            <AnimatedListItem
              delay={index * 0.1}
              key={song._id}
              onClick={() => openSongDetail(song._id)}
            >
              <IconContainer>
                <FaMusic />
              </IconContainer>
              <Text>
                <SongTitle>{song.title}</SongTitle>
                <Artist>{song.artist}</Artist>
              </Text>
            </AnimatedListItem>
          ))}
        </List>
      )}

      {sSongDetailOpen && (
        <SongDetail onClose={closeSongDetail} />
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    margin-left: 10px;
    font-size: 24px;
  }
  svg {
    font-size: 32px;
    color: #ff5e3a; /* Icon color */
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const AnimatedListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background-color: #ffebcd; /* Lighter background on hover */
  }
`;

const IconContainer = styled.div`
  margin-right: 15px;
  font-size: 24px;
  color: #ff5e3a; /* Icon color */
`;

const Text = styled.div`
  flex: 1;
`;

const SongTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333333; /* Title color */
`;

const Artist = styled.div`
  font-size: 14px;
  color: #666666; /* Artist color */
`;

export default MusicPage;
