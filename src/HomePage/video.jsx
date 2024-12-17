import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/dancing-script';
import '@fontsource/fira-sans';
import '@fontsource/quicksand';

export default function Video() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 400);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 400;
      setIsSmallScreen(isSmall);

      // Stop video playback if on small screen
      if (isSmall && videoRef.current) {
        videoRef.current.pause();
      } else if (videoRef.current) {
        videoRef.current.play();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoStyle = {
    width: '100%',
    height: isSmallScreen ? '240px' : '480px',
    objectFit: 'cover',
  };

  const containerStyle = {
    position: isSmallScreen ? 'relative' : 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isSmallScreen ? 'rgba(0, 0, 0, 0.8)' : 'transparent', // Dark background for visibility
    color: 'white',
    padding: isSmallScreen ? '20px' : '0',
    margin: isSmallScreen ? '10px 0' : '0',
    bottom: isSmallScreen ? '0' : '240px',
    width: '100%',
    textAlign: 'center',
    minHeight: isSmallScreen ? 'auto' : '0',
  };

  return (
    <div>
      <video
        ref={videoRef}
        style={videoStyle}
        src="src/assets/videos/2.mp4"
        autoPlay
        muted
        loop
      />
      <div style={containerStyle}>
        <h1 style={{ fontFamily: 'Quicksand', fontWeight: 'bold' }}>
          Home Stories for Winter
        </h1>
        <p style={{ fontFamily: 'Quicksand', fontSize: '1.2em', margin: '10px 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum id facere iste deleniti odio earum eaque quis molestiae inventore ratione.
        </p>
        <button
          type="button"
          style={{
            padding: '10px',
            fontFamily: 'Quicksand',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
