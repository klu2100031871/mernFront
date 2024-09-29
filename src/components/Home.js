import React from 'react';
import backgroundVideo from './images/background.mp4';

function Home() {
  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Ensure the video stays behind other content
  };

  return (
    <div className="home">
      <video autoPlay muted loop style={videoStyle}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can add other content over the video if needed */}
    </div>
  );
}

export default Home;
