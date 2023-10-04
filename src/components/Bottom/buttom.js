import './bottom.css'
import { BiPauseCircle, BiPlay, BiSolidSkipNextCircle, BiSolidSkipPreviousCircle } from "react-icons/bi";
import { useState, useRef, useEffect } from 'react';

const Bottom = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); 
  const [Show, SetisShow] = useState(false);
  const [play, SetisPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const myRef = useRef(null);
  const songs = [
    {
      id: 1,
      title: "Unstoppable",
      src: "/music/Unstoppable.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false, // Add a play state for each song
    },
    {
      id: 2,
      title: "kesariya ",
      src: "/music/song.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false,
    },
    {
      id: 3,
      title: "Chaleya",
      src: "/music/Chaleya.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false,
    },
    {
      id: 4,
      title: "Broken-Angel",
      src: "/music/Broken-Angel.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false,
    },
    {
      id: 5,
      title: "Kahani suno",
      src: "/music/Kahani Suno.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false,
    },
    {
      id: 6,
      title: "Maan Meri Jaan",
      src: "/music/Maan Meri Jaan.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false,
    },
  ];
  const playlist = songs.map((songlist) => songlist.src);

  const PlayHandler = () => {
    const audio = myRef.current;
    if (!play) {
      audio.play();
      SetisPlay(true);
      SetisShow(true);
    } else {
      audio.pause();
      SetisPlay(false);
      SetisShow(false);
    }
  }

  const PauseHandler = () => {
    const audio = myRef.current;
    audio.pause();
    SetisPlay(false);
    SetisShow(false);
  }
  const NextHandler=()=>{
    const audio = myRef.current;
    if (currentSongIndex === songs.length - 1) { // If it's the last song, loop back to the first song
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
    audio.src = playlist[currentSongIndex];
    audio.play();
    SetisPlay(true);
    SetisShow(true);
    console.log(myRef.current)
   
    
  }
  const PreviewHandler=()=>{
    const audio = myRef.current;
    if (currentSongIndex === 0) { // If it's the last song, loop back to the first song
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex -1);
    }
    audio.src = playlist[currentSongIndex];
    audio.play();
    SetisPlay(true);
    SetisShow(true);

  }

  useEffect(() => {
    const audio = myRef.current;
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    return () => {
      audio.ontimeupdate = null;
    };
  }, []);

  const handleSeek = (e) => {
   const audio = myRef.current;
    const seekTime =e.target.value;
     audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  }

  return (
    <div className="Bottom-container">
      <div>
        <input
          type="range"
          min="0"
          
          max={myRef.current ? myRef.current.duration : 0}
          value={currentTime}
          onChange={handleSeek}
        />
      </div>

      <div className="button">
        {Show ? (
          <img src='https://media.tenor.com/_ghn0Sr3fh0AAAAd/music.gif' alt='al' />
        ) : (
          <img src='https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='oo' />
        )}

        <div className='Icons' id='lol'>
          <BiSolidSkipPreviousCircle className='Icons'onClick={PreviewHandler} />
        </div>
        {play ? (
          <div>
            <BiPauseCircle className='Icons' onClick={PauseHandler} />
          </div>
        ) : (
          <div>
            <BiPlay className='Icons' onClick={PlayHandler} />
          </div>
        )}
        <div><BiSolidSkipNextCircle className='Icons' onClick={NextHandler} /></div>
        <audio src={playlist[0]} ref={myRef}></audio>
      </div>
    </div>
  );
}

export default Bottom;
