import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
 
const ImgContainer = styled.div`
  width: 100%;
  height: ${props => (props.isSmallScreen ? '240px' : '460px')};
  overflow: hidden;
  position: relative;
`;
 
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: transform 0.4s ease-in-out;
 
  &:hover {
    transform: scale(1.1);
  }
`;
 
export default function Image() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 400);
 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 400);
    };
 
    window.addEventListener('resize', handleResize);
    handleResize(); 
 
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  const containerStyle = {
    position: isSmallScreen ? 'relative' : 'absolute',
    top: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isSmallScreen ? 'rgba(0, 0, 0, 0.8)' : 'transparent', 
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
      <ImgContainer isSmallScreen={isSmallScreen}>
        <StyledImg
          isSmallScreen={isSmallScreen}
          src="src/assets/Aboutimages/abouts.jpg"
          alt="About"
        />
      </ImgContainer>
      <div style={containerStyle}>
        <h1 style={{ fontWeight: 'bold', fontSize: "60px", color: 'white' }}>
          Explore
        </h1>
      </div>
    </div>
  );
}