import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Level1() {
  //replace by portal link of this student in database
  const portalLink =
    "https://connect.nyu.edu/manage/reader?id=72349a70-f65c-41b0-8ca6-cf9f04f565dd";
  const canvasRef = useRef(null);
  //if admission is not finished = state1
  //if admission is finished but deposite isn't paid(Matriculation isn't finished) = state2
  //if they both finished = state3
  const [currentState, setCurrentState] = useState("state3");

  useEffect(() => {
    drawBackground();
    drawFixedPipes();
    drawDifferentState();
  }, []);

  function drawBackground() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const background = new Image();
    const board = new Image();
    background.src = "https://s2.loli.net/2024/03/01/VTQcBUFINMaofJw.jpg";
    board.src = "https://s2.loli.net/2024/03/01/KEc19oQPzG3YguX.png";
    background.onload = () => {
      ctx.drawImage(background, 0, 0, 2880, 1900);
    };
    board.onload = () => {
      ctx.drawImage(board, 1100, 10, 800, 400);
    };
  }

  function drawFixedPipes() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const vector1 = new Image();
    const tank = new Image();
    vector1.src = "https://s2.loli.net/2024/02/14/i3YQjHnLha78yev.png";
    tank.src = "https://s2.loli.net/2024/02/14/Eu3MjHzqg69aWRi.png";

    vector1.onload = () => {
      ctx.drawImage(vector1, 315, 420, 360, 360);
    };
    tank.onload = () => {
      ctx.drawImage(tank, 315, 780, 360, 360);
    };
  }
  function drawDifferentState() {
    if (currentState === "state1") {
      // draw state1 content
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const vectorState = [
        "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
        "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
      ];
      let currentImageIndex = 0;
      const vector2 = new Image();
      vector2.src = vectorState[currentImageIndex];
      vector2.onload = () => {
        ctx.drawImage(vector2, 670, 780, 360, 360);

        const button = document.getElementById("myButton");

        button.addEventListener("mouseover", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorState.length;
          vector2.src = vectorState[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(670, 780, 360, 360);
          vector2.onload = () => {
            ctx.drawImage(vector2, 670, 780, 360, 360);
          };
        });

        button.addEventListener("mouseout", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorState.length;
          vector2.src = vectorState[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(670, 780, 360, 360);
          vector2.onload = () => {
            ctx.drawImage(vector2, 670, 780, 360, 360);
          };
        });
      };
      const pipe1 = new Image();
      const node1 = new Image();
      const vector3 = new Image();
      const node2 = new Image();
      const pipe2 = new Image();
      pipe1.src = "https://s2.loli.net/2024/03/01/aDp5fRXLrEkswiA.png";
      node1.src = "https://s2.loli.net/2024/03/01/IqKXjQPkDZ4Y6ta.png";
      vector3.src = "https://s2.loli.net/2024/03/01/6sxcNCaoTguM9yd.png";
      node2.src = "https://s2.loli.net/2024/03/01/NVSfrOuMKdG7q6E.png";
      pipe2.src = "https://s2.loli.net/2024/03/01/NEs9Zz3C2M8kgFd.png";
      node1.onload = () => {
        ctx.drawImage(node1, 1030, 780, 360, 360);
      };
      pipe1.onload = () => {
        ctx.drawImage(pipe1, 1390, 780, 360, 360);
      };
      vector3.onload = () => {
        ctx.drawImage(vector3, 1750, 780, 360, 360);
      };
      node2.onload = () => {
        ctx.drawImage(node2, 2110, 780, 360, 360);
      };
      pipe2.onload = () => {
        ctx.drawImage(pipe2, 2110, 1140, 360, 360);
      };
    } else if (currentState === "state2") {
      // draw state2 content
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const vectorState = [
        "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
        "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
      ];
      let currentImageIndex = 0;
      const vector3 = new Image();
      vector3.src = vectorState[currentImageIndex];
      vector3.onload = () => {
        ctx.drawImage(vector3, 1750, 780, 360, 360);

        const button = document.getElementById("myButton");

        button.addEventListener("mouseover", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorState.length;
          vector3.src = vectorState[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1750, 780, 360, 360);
          vector3.onload = () => {
            ctx.drawImage(vector3, 1750, 780, 360, 360);
          };
        });

        button.addEventListener("mouseout", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorState.length;
          vector3.src = vectorState[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1750, 780, 360, 360);
          vector3.onload = () => {
            ctx.drawImage(vector3, 1750, 780, 360, 360);
          };
        });
      };
      const pipe1 = new Image();
      const node1 = new Image();
      const vector2 = new Image();
      const node2 = new Image();
      const pipe2 = new Image();
      vector2.src = "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png";
      pipe1.src = "https://s2.loli.net/2024/03/01/oVdcZ436s5rtg9T.png";
      node1.src = "https://s2.loli.net/2024/03/01/fxeip4yURNB23SK.png";
      node2.src = "https://s2.loli.net/2024/03/01/NVSfrOuMKdG7q6E.png";
      pipe2.src = "https://s2.loli.net/2024/03/01/NEs9Zz3C2M8kgFd.png";
      vector2.onload = () => {
        ctx.drawImage(vector2, 670, 780, 360, 360);
      };
      node1.onload = () => {
        ctx.drawImage(node1, 1030, 780, 360, 360);
      };
      pipe1.onload = () => {
        ctx.drawImage(pipe1, 1390, 780, 360, 360);
      };
      node2.onload = () => {
        ctx.drawImage(node2, 2110, 780, 360, 360);
      };
      pipe2.onload = () => {
        ctx.drawImage(pipe2, 2110, 1140, 360, 360);
      };
    } else if (currentState === "state3") {
      // draw state3 content
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const pipe1 = new Image();
      const node1 = new Image();
      const vector2 = new Image();
      const vector3 = new Image();
      const node2 = new Image();
      const pipe2 = new Image();
      vector2.src = "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png";
      pipe1.src = "https://s2.loli.net/2024/03/01/oVdcZ436s5rtg9T.png";
      node1.src = "https://s2.loli.net/2024/03/01/fxeip4yURNB23SK.png";
      vector3.src = "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png";
      node2.src = "https://s2.loli.net/2024/03/01/GXiukj2JSZqCO1w.png";
      pipe2.src = "https://s2.loli.net/2024/03/01/vJOzfbjwcAFKrZ7.png";
      vector2.onload = () => {
        ctx.drawImage(vector2, 670, 780, 360, 360);
      };
      node1.onload = () => {
        ctx.drawImage(node1, 1030, 780, 360, 360);
      };
      pipe1.onload = () => {
        ctx.drawImage(pipe1, 1390, 780, 360, 360);
      };
      vector3.onload = () => {
        ctx.drawImage(vector3, 1750, 780, 360, 360);
      };
      node2.onload = () => {
        ctx.drawImage(node2, 2110, 780, 360, 360);
      };
      pipe2.onload = () => {
        ctx.drawImage(pipe2, 2110, 1140, 360, 360);
      };
    }
  }

  return (
    <>
      <div style={{ position: "relative" }}>
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
        />
        <p
          className="titleHead text-center"
          style={{ position: "absolute", top: "24.5%", left: "48.5%" }}
        >
          Level1
        </p>
        <p
          className="title text-center"
          style={{ position: "absolute", top: "30%", left: "4%" }}
        >
          Make Sure that you really get into the program
        </p>

        {currentState === "state1" && (
          <>
            <a href={portalLink}>
              <button
                id="myButton"
                style={{ position: "absolute", top: "44%", left: "24.5%" }}
                className="LevelButton"
              >
                Accept Offer
              </button>
            </a>
            <p
              className="DeadlineText"
              style={{ position: "absolute", top: "49.5%", left: "24%" }}
            >
              ‼️Before xx/xx‼️
            </p>
            <button
              style={{
                opacity: "30%",
                position: "absolute",
                top: "44%",
                left: "62%",
              }}
              className="LevelButton"
              disabled
            >
              Pay deposite
            </button>
            <p
              className="DeadlineText"
              style={{
                opacity: "30%",
                position: "absolute",
                top: "49.5%",
                left: "61.5%",
              }}
            >
              ‼️Before xx/xx‼️
            </p>
          </>
        )}
        {currentState === "state2" && (
          <>
            <a href={portalLink}>
              <button
                style={{
                  position: "absolute",
                  top: "44%",
                  left: "62%",
                }}
                id="myButton"
                className="LevelButton"
              >
                Pay deposite
              </button>
            </a>
            <p
              className="DeadlineText"
              style={{
                position: "absolute",
                top: "49.5%",
                left: "61.5%",
              }}
            >
              ‼️Before xx/xx‼️
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Level1;
