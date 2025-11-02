import "../assets/styles/backgroundVideo.css";
import BgVideo from "../assets/background.mp4";
import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadVideo(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={BgVideo} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <h1>Good vibes all night long, here at Club One Love</h1>
        {/* <button>BUY TICKETS</button> */}
      </div>
    </div>
  );
}
