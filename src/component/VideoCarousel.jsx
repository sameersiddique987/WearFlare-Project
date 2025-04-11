import React, { useEffect, useRef, useState } from "react";

const VideoCarousel = () => {
  const videos = [
    "https://cdn.shopify.com/videos/c/o/v/1e033391bd14472eb2c61c865ebad2d3.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRef.current;
    const handleVideoEnd = () => {
      
      currentVideo.currentTime = 0; 
      currentVideo.play(); 
    };

    if (currentVideo) {
      currentVideo.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
  

    <div className="relative w-full h-screen mx-auto mt-10 overflow-hidden  shadow-lg">
  <video
    ref={videoRef}
    key={currentIndex}
    className="w-full h-full object-cover"
    src={videos[currentIndex]} 
    autoPlay
    muted
    playsInline
    controls={false}
    loop 
  />
</div>

  );
};

export default VideoCarousel;

