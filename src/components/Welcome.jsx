import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const canvasRef = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    drawBackground();
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const drawBackground = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const background = new Image();
    const board = new Image();
    background.src = "https://s2.loli.net/2024/03/01/VTQcBUFINMaofJw.jpg";
    board.src = "https://s2.loli.net/2024/03/01/IhHalxRcQvpwVmU.png";
    background.onload = function () {
      ctx.drawImage(background, 0, 0);
    };
    board.onload = function () {
      ctx.drawImage(board, 450, 500, 2000, 1000);
    };
  };

  const handleClick = () => {
    navigate("/Level1");
  };

  return (
    <>
      <div className="image-container">
        <img
          src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png"
          className="img-fluid"
        ></img>
      </div>
      <canvas
        ref={canvasRef}
        width={2880}
        height={1962}
        style={{ width: "100%" }}
        onClick={handleClick}
      />
      <div style={{ position: "absolute", top: "81%", left: "2%" }}>
        <div className="text welcomeTextMargin custom-font">
          <p
            className="lh-sm fw-bold fade-in"
            style={{ animationDelay: "1s", fontSize: "50px" }}
          >
            Welcome, Jiayu!
          </p>
          <p
            className="lh-sm fade-in"
            style={{ animationDelay: "2s", fontSize: "20px" }}
          >
            Congratulations! You've been selected to join our Coding for Game
            Design High School Summer Program 2024!
          </p>
          <p
            className="lh-sm fade-in"
            style={{ animationDelay: "3s", fontSize: "20px" }}
          >
            Now that the hard part is over, it's time to finish some easy
            following steps. We prepared a little game for you to help you
            accomplish them. Enjoy!
          </p>
          <div className="arrow-container" style={{ animationDelay: "4s" }}>
            <img
              src="https://s2.loli.net/2024/03/01/cHgwoVSxXznhbKI.png"
              style={{ width: "20px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
