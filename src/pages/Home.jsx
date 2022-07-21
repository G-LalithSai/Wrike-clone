import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Home = ({ screenWidth }) => {
  const desktopViewHeader = {
    position: "absolute",
    zIndex: "1",
    width: "50%",
    margin: "0 25%",
    paddingTop: screenWidth > 1440 ? "4rem" : "3rem",
    lineHeight: "3rem",
    fontSize: "20px",
    textAlign: "center",
    color: "#fff",
  };

  const mobileViewHeader = {
    backgroundColor: "#0c3245",
    height: "500px",
    lineHeight: screenWidth > 768 ? "3rem" : "2rem",
    padding: `1rem ${screenWidth > 768 ? "4rem" : "2rem"}`,
    fontSize: screenWidth > 678 ? "1.5rem" : "1rem",
    textAlign: "center",
  };
  return (
    <div
      style={{
        paddingTop: "80px",
        color: "#eee",
      }}
    >
      <div>
        <div style={screenWidth >= 1024 ? desktopViewHeader : mobileViewHeader}>
          <h1 style={{ margin: "1.5rem 0" }}>
            Remove barriers, find clarity, exceed goals
          </h1>
          <p>
            Anything is possible with the most powerful work management software
            at your fingertips
          </p>
          <div style={{ marginTop: screenWidth > 768 ? "2rem" : "1rem" }}>
            <input
              style={{
                backgroundColor: "snow",
                color: "#1c1c1c",
                padding: "1rem",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                margin: screenWidth < 768 ? "5px 0px" : "10px",
                width: screenWidth < 768 ? "100%" : "auto",
              }}
              placeholder="Enter your business email"
              type="email"
            />
            <button
              style={{
                padding: "1rem",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#07cf65",
                margin: screenWidth < 768 ? "5px 0px" : "10px",
                width: screenWidth < 768 ? "100%" : "auto",
              }}
            >
              Try for free
            </button>
            <div
              style={{ fontSize: "18px", color: "#07cf65", fontWeight: "bold" }}
            >
              <AiOutlinePlayCircle /> Our Story
            </div>
          </div>
        </div>
        <>
          {screenWidth >= 1024 && (
            <img
              src="/rebrand-hero-illustration_homepage_screenshots_dark_1920x680_1x.png"
              alt="homepage"
              style={{
                position: "relative",
                maxWidth: "100%",
                paddingTop: screenWidth >= 1440 ? "4rem" : "8rem",
                backgroundColor: "#0c3245",
              }}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default Home;
