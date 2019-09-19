import React, { createContext, useState } from "react";

export const NowPlayingContext = createContext();

const NowPlayingContextProvider = props => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState("");
  const setNowPlaying = value => {
    setCurrentlyPlaying(value);
  };
  return (
    <NowPlayingContext.Provider value={{ currentlyPlaying, setNowPlaying }}>
      {props.children}
    </NowPlayingContext.Provider>
  );
};

export default NowPlayingContextProvider;
