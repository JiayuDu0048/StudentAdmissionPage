import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Level2() {
  //if unity is not finished = state1
  //if unity is finished but tutorial is not finished = state2
  //if only survey is not finished = state3
  //all finished = state4
  const [currentState, setCurrentState] = useState("state2");

  //button link to unityInstruction
  const navigate = useNavigate();
  const handleUnity = () => {
    navigate("/UnityInstruction");
  };

  const canvasRef = useRef(null);
  useEffect(() => {
    drawBackground();
    drawFixedPipes();
    drawDifferentState();
  }, []);

  //Draw background and title board
  function drawBackground() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const background = new Image();
    const board = new Image();
    background.src = "https://s2.loli.net/2024/03/08/9l7sickOzomAJ1d.png";
    board.src = "https://s2.loli.net/2024/03/01/KEc19oQPzG3YguX.png";
    background.onload = () => {
      ctx.drawImage(background, 0, -10, 2880, 3142);
    };
    board.onload = () => {
      ctx.drawImage(board, 1040, 10, 800, 400);
    };
  }

  function drawFixedPipes() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const vector1 = new Image();
    const node1 = new Image();
    vector1.src = "https://s2.loli.net/2024/03/08/qB6PFbxwkGVI24Z.png";
    node1.src = "https://s2.loli.net/2024/03/08/9rDopYNQJGuHlhB.png";
    vector1.onload = () => {
      ctx.drawImage(vector1, 2350, 420, 360, 360);
    };
    node1.onload = () => {
      ctx.drawImage(node1, 2350, 780, 360, 360);
    };
  }

  function drawDifferentState() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const vectorUnity = new Image(),
      vectorTutorial = new Image(),
      vectorSurvey = new Image(),
      nodeEmpty1 = new Image(),
      nodeEmpty2 = new Image(),
      nodeEmpty3 = new Image(),
      nodeEmpty4 = new Image(),
      nodeFull1 = new Image(),
      nodeFull2 = new Image(),
      nodeFull3 = new Image(),
      nodeFull4 = new Image(),
      pipelineH = new Image(),
      pipelineV = new Image(),
      pipelineFullH = new Image(),
      pipelineFullV = new Image();
    const vectorStateU = [
      "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
      "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
    ];
    const vectorStateT = [
      "https://s2.loli.net/2024/03/08/iUaGv6YNHn2f3Tz.png",
      "https://s2.loli.net/2024/03/08/DCRvoh4I8yTcf79.png",
    ];
    const vectorStateS = [
      "https://s2.loli.net/2024/03/08/GheOC3ul6E4fpK9.png",
      "https://s2.loli.net/2024/03/08/crWO4m97dtflny5.png",
    ];

    nodeEmpty1.src = "https://s2.loli.net/2024/03/08/Cz6wnxhZKU3aoPD.png";
    nodeEmpty2.src = "https://s2.loli.net/2024/03/08/bV2tWwfGhlRpmOq.png";
    nodeEmpty3.src = "https://s2.loli.net/2024/03/08/eIAa3QhDOzxgPpi.png";
    nodeEmpty4.src = "https://s2.loli.net/2024/03/08/Aicqb7Zle2zPCWn.png";
    nodeFull1.src = "https://s2.loli.net/2024/03/08/ZWBkM74qjY92b3R.png";
    nodeFull2.src = "https://s2.loli.net/2024/03/08/OdcvpQrHxSAnV9e.png";
    nodeFull3.src = "https://s2.loli.net/2024/03/08/4lf9dqTOEvaHix1.png";
    nodeFull4.src = "https://s2.loli.net/2024/03/08/ETgQiMjUzpuvNfD.png";
    pipelineH.src = "https://s2.loli.net/2024/03/08/YzpDiHOMhW1ClJd.png";
    pipelineV.src = "https://s2.loli.net/2024/03/08/dzYXcgOQiwWHJKR.png";
    pipelineFullH.src = "https://s2.loli.net/2024/03/08/JY7avPeGfjD5MFI.png";
    pipelineFullV.src = "https://s2.loli.net/2024/03/08/XrGHWiKz129SCfN.png";

    if (currentState === "state1") {
      //for vectorUnity
      let currentImageIndex = 0;
      vectorUnity.src = vectorStateU[currentImageIndex];
      vectorTutorial.src = vectorStateT[0];
      vectorSurvey.src = vectorStateS[0];
      vectorUnity.onload = () => {
        ctx.drawImage(vectorUnity, 1990, 780, 360, 360);
        const button = document.getElementById("myButton");
        button.addEventListener("mouseover", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorStateU.length;
          vectorUnity.src = vectorStateU[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 780, 360, 360);
          vectorUnity.onload = () => {
            ctx.drawImage(vectorUnity, 1990, 780, 360, 360);
          };
        });
        button.addEventListener("mouseout", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorStateU.length;
          vectorUnity.src = vectorStateU[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 780, 360, 360);
          vectorUnity.onload = () => {
            ctx.drawImage(vectorUnity, 1990, 780, 360, 360);
          };
        });
      };

      nodeEmpty1.onload = () => {
        ctx.drawImage(nodeEmpty1, 1660, 420, 360, 360);
        ctx.drawImage(nodeEmpty1, 1300, 780, 360, 360);
        ctx.drawImage(nodeEmpty1, 1990, 1140, 360, 360);
      };
      nodeEmpty2.onload = () => {
        ctx.drawImage(nodeEmpty2, 940, 420, 360, 360);
        ctx.drawImage(nodeEmpty2, 580, 780, 360, 360);
      };
      nodeEmpty3.onload = () => {
        ctx.drawImage(nodeEmpty3, 1660, 780, 360, 360);
        ctx.drawImage(nodeEmpty3, 580, 1500, 360, 360);
        ctx.drawImage(nodeEmpty3, 1300, 1140, 360, 360);
      };
      nodeEmpty4.onload = () => {
        ctx.drawImage(nodeEmpty4, 940, 1500, 360, 360);
      };
      pipelineH.onload = () => {
        ctx.drawImage(pipelineH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineH, 940, 780, 360, 360);
        ctx.drawImage(pipelineH, 1660, 1140, 360, 360);
      };
      pipelineV.onload = () => {
        ctx.drawImage(pipelineV, 940, 780, 360, 360);
        ctx.drawImage(pipelineV, 940, 1140, 360, 360);
      };
      vectorTutorial.onload = () => {
        ctx.drawImage(vectorTutorial, 580, 1140, 360, 360);
      };
      vectorSurvey.onload = () => {
        ctx.drawImage(vectorSurvey, 1990, 1500, 360, 360);
      };
    } else if (currentState === "state2") {
      //for vectorTutorial
      vectorUnity.src = vectorStateU[1];
      vectorSurvey.src = vectorStateS[0];
      let currentImageIndex = 0;
      vectorTutorial.src = vectorStateT[currentImageIndex];
      vectorTutorial.onload = () => {
        ctx.drawImage(vectorTutorial, 580, 1140, 360, 360);
        const button = document.getElementById("myButton");
        button.addEventListener("mouseover", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorStateT.length;
          vectorTutorial.src = vectorStateT[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(580, 1140, 360, 360);
          vectorTutorial.onload = () => {
            ctx.drawImage(vectorTutorial, 580, 1140, 360, 360);
          };
        });
        button.addEventListener("mouseout", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorStateT.length;
          vectorTutorial.src = vectorStateT[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(580, 1140, 360, 360);
          vectorTutorial.onload = () => {
            ctx.drawImage(vectorTutorial, 580, 1140, 360, 360);
          };
        });
      };
      nodeFull1.onload = () => {
        ctx.drawImage(nodeFull1, 1660, 420, 360, 360);
      };
      nodeFull2.onload = () => {
        ctx.drawImage(nodeFull2, 940, 420, 360, 360);
      };
      nodeFull3.onload = () => {
        ctx.drawImage(nodeFull3, 1660, 780, 360, 360);
        ctx.drawImage(nodeFull3, 580, 1500, 360, 360);
      };
      nodeFull4.onload = () => {
        ctx.drawImage(nodeFull4, 940, 1500, 360, 360);
      };
      pipelineFullH.onload = () => {
        ctx.drawImage(pipelineFullH, 1300, 420, 360, 360);
      };
      pipelineFullV.onload = () => {
        ctx.drawImage(pipelineFullV, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 1140, 360, 360);
      };
      nodeEmpty1.onload = () => {
        ctx.drawImage(nodeEmpty1, 1300, 780, 360, 360);
        ctx.drawImage(nodeEmpty1, 1990, 1140, 360, 360);
      };
      nodeEmpty2.onload = () => {
        ctx.drawImage(nodeEmpty2, 580, 780, 360, 360);
      };
      nodeEmpty3.onload = () => {
        ctx.drawImage(nodeEmpty3, 1300, 1140, 360, 360);
      };

      pipelineH.onload = () => {
        ctx.drawImage(pipelineH, 940, 780, 360, 360);
        ctx.drawImage(pipelineH, 1660, 1140, 360, 360);
      };
      pipelineV.onload = () => {};
      vectorUnity.onload = () => {
        ctx.drawImage(vectorUnity, 1990, 780, 360, 360);
      };
      vectorSurvey.onload = () => {
        ctx.drawImage(vectorSurvey, 1990, 1500, 360, 360);
      };
    } else if (currentState === "state3") {
      //for vectorSurvey
      vectorTutorial.src = vectorStateT[1];
      vectorUnity.src = vectorStateU[1];
      let currentImageIndex = 0;
      vectorSurvey.src = vectorStateS[currentImageIndex];
      vectorSurvey.onload = () => {
        ctx.drawImage(vectorSurvey, 1990, 1500, 360, 360);
        const button = document.getElementById("myButton");
        button.addEventListener("mouseover", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorStateS.length;
          vectorSurvey.src = vectorStateS[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 1500, 360, 360);
          vectorSurvey.onload = () => {
            ctx.drawImage(vectorSurvey, 1990, 1500, 360, 360);
          };
        });
        button.addEventListener("mouseout", () => {
          currentImageIndex = (currentImageIndex + 1) % vectorStateS.length;
          vectorSurvey.src = vectorStateS[currentImageIndex];
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 1500, 360, 360);
          vectorSurvey.onload = () => {
            ctx.drawImage(vectorSurvey, 1990, 1500, 360, 360);
          };
        });
      };
      nodeFull1.onload = () => {
        ctx.drawImage(nodeFull1, 1660, 420, 360, 360);
        ctx.drawImage(nodeFull1, 1300, 780, 360, 360);
        ctx.drawImage(nodeFull1, 1990, 1140, 360, 360);
      };
      nodeFull2.onload = () => {
        ctx.drawImage(nodeFull2, 940, 420, 360, 360);
        ctx.drawImage(nodeFull2, 580, 780, 360, 360);
      };
      nodeFull3.onload = () => {
        ctx.drawImage(nodeFull3, 1660, 780, 360, 360);
        ctx.drawImage(nodeFull3, 580, 1500, 360, 360);
        ctx.drawImage(nodeFull3, 1300, 1140, 360, 360);
      };
      nodeFull4.onload = () => {
        ctx.drawImage(nodeFull4, 940, 1500, 360, 360);
      };
      pipelineFullH.onload = () => {
        ctx.drawImage(pipelineFullH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineFullH, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullH, 1660, 1140, 360, 360);
      };
      pipelineV.onload = () => {
        ctx.drawImage(pipelineFullV, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 1140, 360, 360);
      };
      vectorTutorial.onload = () => {
        ctx.drawImage(vectorTutorial, 580, 1140, 360, 360);
      };
      vectorUnity.onload = () => {
        ctx.drawImage(vectorUnity, 1990, 780, 360, 360);
      };
    } else if (currentState === "state4") {
      vectorTutorial.src = vectorStateT[1];
      vectorUnity.src = vectorStateU[1];
      vectorSurvey.src = vectorStateS[1];
      nodeFull1.onload = () => {
        ctx.drawImage(nodeFull1, 1660, 420, 360, 360);
        ctx.drawImage(nodeFull1, 1300, 780, 360, 360);
        ctx.drawImage(nodeFull1, 1990, 1140, 360, 360);
      };
      nodeFull2.onload = () => {
        ctx.drawImage(nodeFull2, 940, 420, 360, 360);
        ctx.drawImage(nodeFull2, 580, 780, 360, 360);
      };
      nodeFull3.onload = () => {
        ctx.drawImage(nodeFull3, 1660, 780, 360, 360);
        ctx.drawImage(nodeFull3, 580, 1500, 360, 360);
        ctx.drawImage(nodeFull3, 1300, 1140, 360, 360);
      };
      nodeFull4.onload = () => {
        ctx.drawImage(nodeFull4, 940, 1500, 360, 360);
      };
      pipelineFullH.onload = () => {
        ctx.drawImage(pipelineFullH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineFullH, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullH, 1660, 1140, 360, 360);
      };
      pipelineV.onload = () => {
        ctx.drawImage(pipelineFullV, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 1140, 360, 360);
      };
      vectorTutorial.onload = () => {
        ctx.drawImage(vectorTutorial, 580, 1140, 360, 360);
      };
      vectorUnity.onload = () => {
        ctx.drawImage(vectorUnity, 1990, 780, 360, 360);
      };
      vectorSurvey.onload = () => {
        ctx.drawImage(vectorSurvey, 1990, 1500, 360, 360);
      };
    }
  }

  return (
    <>
      <div>
        <img
          src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png"
          className="img-fluid"
        ></img>
        <div className="second-image-container">
          <canvas
            ref={canvasRef}
            width={2880}
            height={3142}
            style={{ width: "100%" }}
          />
          <p className="titleHead text-center titleHead-position-level2">
            Level2
          </p>
          <p className="title text-center title-position-level2">
            Be well prepared for creating your own game
          </p>
          {currentState === "state1" && (
            <>
              <button
                id="myButton"
                className="LevelButton buttonUnity-position"
                onClick={handleUnity}
              >
                Download Unity & Unity Package
              </button>
              <button className="LevelButton buttonTutorial-position disabled">
                Finish Coursera Tutorial
              </button>
              <button className="LevelButton buttonSurvey-position disabled">
                Join our Slack Channel
              </button>
              <div className="tank"></div>
            </>
          )}
          {currentState === "state2" && (
            <>
              <button
                id="myButton"
                className="LevelButton buttonTutorial-position"
              >
                Finish Coursera Tutorial
              </button>
              <button className="LevelButton buttonSurvey-position disabled">
                Join our Slack Channel
              </button>
              <div className="tank"></div>
            </>
          )}
          {currentState === "state3" && (
            <>
              <button
                id="myButton"
                className="LevelButton buttonSurvey-position"
              >
                Join our Slack Channel
              </button>
              <div className="tank"></div>
            </>
          )}
          {currentState === "state4" && (
            <>
              <div className="tank">
                <div className="water-back"></div>
                <div className="water-forword"></div>
                <div>
                  <p className="tank-text1" style={{ animationDelay: "2s" }}>
                    Well done!!
                  </p>
                  <p className="tank-text2" style={{ animationDelay: "3s" }}>
                    Now everything is finished.
                  </p>
                  <p className="tank-text3" style={{ animationDelay: "4s" }}>
                    SEE YOU THIS SUMMER
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Level2;


