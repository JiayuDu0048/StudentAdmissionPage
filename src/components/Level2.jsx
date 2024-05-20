import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Level2() {
  const canvasRef = useRef(null);

  //if unity is not finished = state1
  //if unity is finished but tutorial is not finished = state2
  //if only survey is not finished = state3
  //all finished = state4
  const [currentState, setCurrentState] = useState("state1");
  const navigate = useNavigate();
  const handleUnity = () => {
    navigate("/UnityInstruction");
  };
  useEffect(() => {
    const loadImages = (srcList) => {
      const promises = srcList.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });
      });
      return Promise.all(promises);
    };

    const drawCanvas = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const backgroundSrc =
        "https://s2.loli.net/2024/03/08/9l7sickOzomAJ1d.png";
      const boardSrc = "https://s2.loli.net/2024/03/01/KEc19oQPzG3YguX.png";
      const vector1Src = "https://s2.loli.net/2024/03/08/qB6PFbxwkGVI24Z.png";
      const node1Src = "https://s2.loli.net/2024/03/08/9rDopYNQJGuHlhB.png";

      const nodeEmpty1Src =
        "https://s2.loli.net/2024/03/08/Cz6wnxhZKU3aoPD.png";
      const nodeEmpty2Src =
        "https://s2.loli.net/2024/03/08/bV2tWwfGhlRpmOq.png";
      const nodeEmpty3Src =
        "https://s2.loli.net/2024/03/08/eIAa3QhDOzxgPpi.png";
      const nodeEmpty4Src =
        "https://s2.loli.net/2024/03/08/Aicqb7Zle2zPCWn.png";
      const nodeFull1Src = "https://s2.loli.net/2024/03/08/ZWBkM74qjY92b3R.png";
      const nodeFull2Src = "https://s2.loli.net/2024/03/08/OdcvpQrHxSAnV9e.png";
      const nodeFull3Src = "https://s2.loli.net/2024/03/08/4lf9dqTOEvaHix1.png";
      const nodeFull4Src = "https://s2.loli.net/2024/03/08/ETgQiMjUzpuvNfD.png";
      const pipelineHSrc = "https://s2.loli.net/2024/03/08/YzpDiHOMhW1ClJd.png";
      const pipelineVSrc = "https://s2.loli.net/2024/03/08/dzYXcgOQiwWHJKR.png";
      const pipelineFullHSrc =
        "https://s2.loli.net/2024/03/08/JY7avPeGfjD5MFI.png";
      const pipelineFullVSrc =
        "https://s2.loli.net/2024/03/08/XrGHWiKz129SCfN.png";
      const vectorStateU1Src =
        "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png";
      const vectorStateU2Src =
        "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png";
      const vectorStateT1Src =
        "https://s2.loli.net/2024/03/08/iUaGv6YNHn2f3Tz.png";
      const vectorStateT2Src =
        "https://s2.loli.net/2024/03/08/DCRvoh4I8yTcf79.png";
      const vectorStateS1Src =
        "https://s2.loli.net/2024/03/08/GheOC3ul6E4fpK9.png";
      const vectorStateS2Src =
        "https://s2.loli.net/2024/03/08/crWO4m97dtflny5.png";

      const [
        background,
        board,
        vector1,
        node1,
        nodeEmpty1,
        nodeEmpty2,
        nodeEmpty3,
        nodeEmpty4,
        nodeFull1,
        nodeFull2,
        nodeFull3,
        nodeFull4,
        pipelineH,
        pipelineV,
        pipelineFullH,
        pipelineFullV,
        vectorStateU1,
        vectorStateU2,
        vectorStateT1,
        vectorStateT2,
        vectorStateS1,
        vectorStateS2,
      ] = await loadImages([
        backgroundSrc,
        boardSrc,
        vector1Src,
        node1Src,
        nodeEmpty1Src,
        nodeEmpty2Src,
        nodeEmpty3Src,
        nodeEmpty4Src,
        nodeFull1Src,
        nodeFull2Src,
        nodeFull3Src,
        nodeFull4Src,
        pipelineHSrc,
        pipelineVSrc,
        pipelineFullHSrc,
        pipelineFullVSrc,
        vectorStateU1Src,
        vectorStateU2Src,
        vectorStateT1Src,
        vectorStateT2Src,
        vectorStateS1Src,
        vectorStateS2Src,
      ]);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background, 0, -10, 2880, 3142);
      ctx.drawImage(board, 1040, 10, 800, 400);
      ctx.drawImage(vector1, 2350, 420, 360, 360);
      ctx.drawImage(node1, 2350, 780, 360, 360);
      if (currentState === "state1") {
        ctx.drawImage(nodeEmpty1, 1660, 420, 360, 360);
        ctx.drawImage(nodeEmpty1, 1300, 780, 360, 360);
        ctx.drawImage(nodeEmpty1, 1990, 1140, 360, 360);
        ctx.drawImage(nodeEmpty2, 940, 420, 360, 360);
        ctx.drawImage(nodeEmpty2, 580, 780, 360, 360);
        ctx.drawImage(nodeEmpty3, 1660, 780, 360, 360);
        ctx.drawImage(nodeEmpty3, 580, 1500, 360, 360);
        ctx.drawImage(nodeEmpty3, 1300, 1140, 360, 360);
        ctx.drawImage(nodeEmpty4, 940, 1500, 360, 360);
        ctx.drawImage(pipelineH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineH, 940, 780, 360, 360);
        ctx.drawImage(pipelineH, 1660, 1140, 360, 360);
        ctx.drawImage(pipelineV, 940, 780, 360, 360);
        ctx.drawImage(pipelineV, 940, 1140, 360, 360);
        ctx.drawImage(vectorStateT1, 580, 1140, 360, 360);
        ctx.drawImage(vectorStateS1, 1990, 1500, 360, 360);
        ctx.drawImage(vectorStateU1, 1990, 780, 360, 360);
        const button = document.getElementById("myButton");
        button.addEventListener("mouseover", () => {
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 780, 360, 360);
          ctx.drawImage(vectorStateU2, 1990, 780, 360, 360);
        });
        button.addEventListener("mouseout", () => {
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 780, 360, 360);
          ctx.drawImage(vectorStateU1, 1990, 780, 360, 360);
        });
      } else if (currentState === "state2") {
        ctx.drawImage(nodeFull1, 1660, 420, 360, 360);
        ctx.drawImage(nodeFull2, 940, 420, 360, 360);
        ctx.drawImage(nodeFull3, 1660, 780, 360, 360);
        ctx.drawImage(nodeFull3, 580, 1500, 360, 360);
        ctx.drawImage(nodeFull4, 940, 1500, 360, 360);
        ctx.drawImage(pipelineFullH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 1140, 360, 360);
        ctx.drawImage(nodeEmpty1, 1300, 780, 360, 360);
        ctx.drawImage(nodeEmpty1, 1990, 1140, 360, 360);
        ctx.drawImage(nodeEmpty2, 580, 780, 360, 360);
        ctx.drawImage(nodeEmpty3, 1300, 1140, 360, 360);
        ctx.drawImage(pipelineH, 940, 780, 360, 360);
        ctx.drawImage(pipelineH, 1660, 1140, 360, 360);
        ctx.drawImage(vectorStateU2, 1990, 780, 360, 360);
        ctx.drawImage(vectorStateS1, 1990, 1500, 360, 360);
        ctx.drawImage(vectorStateT1, 580, 1140, 360, 360);
        const button = document.getElementById("myButton");
        button.addEventListener("mouseover", () => {
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(580, 1140, 360, 360);
          ctx.drawImage(vectorStateT2, 580, 1140, 360, 360);
        });
        button.addEventListener("mouseout", () => {
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(580, 1140, 360, 360);
          ctx.drawImage(vectorStateT1, 580, 1140, 360, 360);
        });
      } else if (currentState === "state3") {
        ctx.drawImage(nodeFull1, 1660, 420, 360, 360);
        ctx.drawImage(nodeFull1, 1300, 780, 360, 360);
        ctx.drawImage(nodeFull1, 1990, 1140, 360, 360);
        ctx.drawImage(nodeFull2, 940, 420, 360, 360);
        ctx.drawImage(nodeFull2, 580, 780, 360, 360);
        ctx.drawImage(nodeFull3, 1660, 780, 360, 360);
        ctx.drawImage(nodeFull3, 580, 1500, 360, 360);
        ctx.drawImage(nodeFull3, 1300, 1140, 360, 360);
        ctx.drawImage(nodeFull4, 940, 1500, 360, 360);
        ctx.drawImage(pipelineFullH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineFullH, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullH, 1660, 1140, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 1140, 360, 360);
        ctx.drawImage(vectorStateT2, 580, 1140, 360, 360);
        ctx.drawImage(vectorStateU2, 1990, 780, 360, 360);
        ctx.drawImage(vectorStateS1, 1990, 1500, 360, 360);
        const button = document.getElementById("myButton");
        button.addEventListener("mouseover", () => {
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 1500, 360, 360);
          ctx.drawImage(vectorStateS2, 1990, 1500, 360, 360);
        });
        button.addEventListener("mouseout", () => {
          ctx.fillStyle = "#311f1f";
          ctx.fillRect(1990, 1500, 360, 360);
          ctx.drawImage(vectorStateS1, 1990, 1500, 360, 360);
        });
      } else if (currentState === "state4") {
        ctx.drawImage(nodeFull1, 1660, 420, 360, 360);
        ctx.drawImage(nodeFull1, 1300, 780, 360, 360);
        ctx.drawImage(nodeFull1, 1990, 1140, 360, 360);
        ctx.drawImage(nodeFull2, 940, 420, 360, 360);
        ctx.drawImage(nodeFull2, 580, 780, 360, 360);
        ctx.drawImage(nodeFull3, 1660, 780, 360, 360);
        ctx.drawImage(nodeFull3, 580, 1500, 360, 360);
        ctx.drawImage(nodeFull3, 1300, 1140, 360, 360);
        ctx.drawImage(nodeFull4, 940, 1500, 360, 360);
        ctx.drawImage(pipelineFullH, 1300, 420, 360, 360);
        ctx.drawImage(pipelineFullH, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullH, 1660, 1140, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 780, 360, 360);
        ctx.drawImage(pipelineFullV, 940, 1140, 360, 360);
        ctx.drawImage(vectorStateT2, 580, 1140, 360, 360);
        ctx.drawImage(vectorStateU2, 1990, 780, 360, 360);
        ctx.drawImage(vectorStateS2, 1990, 1500, 360, 360);
      }
    };
    drawCanvas();
  }, [currentState]);

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
                Join our Slack Channel
              </button>
              <button className="LevelButton buttonSurvey-position disabled">
                Finish Unity Tutorial
              </button>
              <div className="tank"></div>
            </>
          )}
          {currentState === "state3" && (
            <>
              <a href="https://coursera.org/projects/unity-absolute-beginners-getting-started">
                <button
                  id="myButton"
                  className="LevelButton buttonSurvey-position"
                >
                  Finish Unity Tutorial
                </button>
              </a>
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
