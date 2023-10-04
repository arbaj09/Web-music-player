import "./Home.css";
import { BiPlay } from "react-icons/bi";
import { FaRegPauseCircle } from "react-icons/fa";
import { useRef, useState } from "react";


const Home = () => {      
   const[playing,setisPlay]= useState(null)

  const myRef = useRef({});
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
      title: "Maan-Meri-Jaan",
      src: "/music/Maan Meri Jaan.mp3",
      cover: "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      isPlaying: false,
    },
  ];

  const PlayHandler = (song,id) => {
    const audio = myRef.current[song.id];
  
    
    const isCurrentlyPlaying = playing === song.id;

    if(!isCurrentlyPlaying){
      audio.play()
      setisPlay(song.id)
 
     
   



    }

    
    if (playing!== null) {
      const currentAudio = myRef.current[playing];
      currentAudio.pause(null);
   
      
  
    }
  

  


  };


  const PauseHandler = (song) => {
 
    const audio = myRef.current[song.id];
    const isCurrentlyPlaying = playing === song.id;

    if(isCurrentlyPlaying){
      
      audio.pause()
      setisPlay(null)
    
    }

 
  
  };

  return (
    <><div className="Main_container">
      <div className="main">
        {songs.map((song,id) => (
          <ul key={song.id} className="Song">
            <div className="CoverPhoto">
              <img src={song.cover} alt="imagedd" />
            </div> 
            <div>{song.title}</div>
            <audio src={song.src} ref={(el) => (myRef.current[song.id] = el)} />

            <div className="playButton">
              {playing === song.id? (
                <><FaRegPauseCircle
                  className="playIcon"
                  onClick={() => PauseHandler(song)} />
                    <div className="playGIF"><img src="https://media.tenor.com/_ghn0Sr3fh0AAAAd/music.gif" alt="gOG" rel={myRef} /></div></>
                
              ) : (
                <BiPlay
                  className="playIcon"
                  onClick={() => PlayHandler(song)}
                />
              )}
             
            </div>
          </ul>
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
