import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/quicksand"; // Import Quicksand
import { useNavigate } from "react-router-dom";

export default function Video() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const videoContainerStyle = {
    position: "relative",
    height: "480px",
    // width: "100%",
    marginTop: 0,
    zIndex: 0,
    boxSizing: "border-box",
  };

  const videoStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transition: "filter 2s ease", // Transition for the blur effect
    filter: isHovered ? "blur(5px)" : "none", // Apply blur on hover
  };

  const containerStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    bottom: "240px",
    left: "400px",
    transition: "all 0.5s ease",
    top: isHovered ? "100px" : "150px",
    width: "500px",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    fontFamily: "Quicksand, sans-serif", // Use the imported font
    color: "#FFF8E6",
    zIndex: 2,
  };

  const h1Style = {
    ...textStyle,
    fontWeight: "bold",
    transition: "transform 3s ease",
    transform: isHovered ? "translateY(0px)" : "translateY(-20px)",
  };

  const pStyle = {
    ...textStyle,
    display: isHovered ? "block" : "none",
    fontSize: "1.2em",
    width: "auto",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    transform: isHovered ? "translateY(0px)" : "translateY(20px)",
  };

  const BStyle = {
    ...textStyle,
    padding: "10px",
    backgroundColor: "white",
    color: "Black",
    width: "180px",
    outline: "none",
    border: "none",
    display: isHovered ? "block" : "none",
    fontSize: "1em",
    transition: "opacity 0.5s ease, transform 0.3s ease",
    cursor: "pointer",
    marginTop: "15px",
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? "translateY(0px)" : "translateY(20px)",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: isHovered ? 0.4 : 0, // Control opacity based on hover state
    visibility: isHovered ? "visible" : "hidden",
    transition: "opacity 0.5s ease, visibility 0.5s ease",
    zIndex: 1,
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const handleBuyNowClick = () => {
    navigate("/products");
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={videoContainerStyle}
    >
      <div style={overlayStyle}></div>
      <video
        style={videoStyle}
        src="src/assets/Home/2.mp4"
        autoPlay
        muted
        loop
        onContextMenu={handleContextMenu} // Prevent context menu on right-click
      />
      <div style={containerStyle}>
        <h1 style={h1Style}>Home Stories for Winter</h1>
        <p style={pStyle}>
          Discover a curated collection of exquisite home decor that brings your
          vision to life. We believe that every space tells a story. Our
          handpicked selection of furniture, art, and accessories is designed to
          reflect your unique style and elevate your home.
        </p>
        <button type="button" style={BStyle} onClick={handleBuyNowClick}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
