import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const handleClick = () => {
    navigate("/Level1");
  };

  return (
    <>
      <div>
        <img
          src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png"
          className="img-fluid"
        ></img>
        <div className="second-image-container">
          <img
            src="https://s2.loli.net/2024/03/01/VTQcBUFINMaofJw.jpg"
            className="img-fluid"
          ></img>
          <div className="third-image-container">
            <img
              src="https://s2.loli.net/2024/03/01/IhHalxRcQvpwVmU.png"
              className="board-size"
            ></img>
            <div className="fourth-text-container">
              <div className="welcomeTextMargin custom-font">
                <p
                  className="lh-sm fw-bold h-size fade-in"
                  style={{ animationDelay: "1s" }}
                >
                  Welcome, Jiayu!
                </p>
                <p
                  className="lh-sm p-size fade-in"
                  style={{ animationDelay: "2s" }}
                >
                  Congratulations! You've been selected to join our Coding for
                  Game Design High School Summer Program 2024!
                </p>
                <p
                  className="lh-sm p-size fade-in"
                  style={{ animationDelay: "3s" }}
                >
                  Now that the hard part is over, it's time to finish some easy
                  following steps. We prepared a little game for you to help you
                  accomplish them. Enjoy!
                </p>
                <img
                  src="https://s2.loli.net/2024/03/01/cHgwoVSxXznhbKI.png"
                  className="arrow-container"
                  style={{ animationDelay: "4s" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
