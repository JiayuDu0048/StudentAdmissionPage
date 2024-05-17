// import React, { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function Level1() {
//   //replace by portal link of this student in database
//   const portalLink =
//     "https://connect.nyu.edu/manage/reader?id=72349a70-f65c-41b0-8ca6-cf9f04f565dd";
//   //replace by the session of this student in database
//   const session = "session1";
//   let date, modality;
//   if (session === "session1") {
//     date = "06/17-06/28";
//     modality = "Online";
//   } else if (session === "session2") {
//     date = "07/08-07/19";
//     modality = "In person";
//   } else if (session === "session3") {
//     date = "07/29-08/09";
//     modality = "In person";
//   }
//   const canvasRef = useRef(null);
//   //if admission is not finished = state1
//   //if admission is finished but deposite isn't paid(Matriculation isn't finished) = state2
//   //if they both finished = state3
//   const [currentState, setCurrentState] = useState("state3");

//   //Draw canvas
//   useEffect(() => {
//     drawBackground();
//     drawFixedPipes();
//     drawDifferentState();
//   }, []);

//   //Draw background and title board
//   function drawBackground() {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const background = new Image();
//     const board = new Image();
//     background.src = "https://s2.loli.net/2024/03/01/VTQcBUFINMaofJw.jpg";
//     board.src = "https://s2.loli.net/2024/03/01/KEc19oQPzG3YguX.png";
//     background.onload = () => {
//       ctx.drawImage(background, 0, 0, 2880, 1900);
//     };
//     board.onload = () => {
//       ctx.drawImage(board, 1040, 10, 800, 400);
//     };
//   }

//   //Draw fixed pipeline
//   function drawFixedPipes() {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const vector1 = new Image();
//     const tank = new Image();
//     vector1.src = "https://s2.loli.net/2024/02/14/i3YQjHnLha78yev.png";
//     tank.src = "https://s2.loli.net/2024/02/14/Eu3MjHzqg69aWRi.png";
//     vector1.onload = () => {
//       ctx.drawImage(vector1, 315, 420, 360, 360);
//     };
//     tank.onload = () => {
//       ctx.drawImage(tank, 315, 780, 360, 360);
//     };
//   }

//   //Draw pipelines that change as the state changes
//   function drawDifferentState() {
//     if (currentState === "state1") {
//       // draw state1 content
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");
//       const vectorState = [
//         "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
//         "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
//       ];
//       let currentImageIndex = 0;
//       const vector2 = new Image();
//       vector2.src = vectorState[currentImageIndex];
//       vector2.onload = () => {
//         ctx.drawImage(vector2, 670, 780, 360, 360);
//         const button = document.getElementById("myButton");
//         button.addEventListener("mouseover", () => {
//           currentImageIndex = (currentImageIndex + 1) % vectorState.length;
//           vector2.src = vectorState[currentImageIndex];
//           ctx.fillStyle = "#311f1f";
//           ctx.fillRect(670, 780, 360, 360);
//           vector2.onload = () => {
//             ctx.drawImage(vector2, 670, 780, 360, 360);
//           };
//         });
//         button.addEventListener("mouseout", () => {
//           currentImageIndex = (currentImageIndex + 1) % vectorState.length;
//           vector2.src = vectorState[currentImageIndex];
//           ctx.fillStyle = "#311f1f";
//           ctx.fillRect(670, 780, 360, 360);
//           vector2.onload = () => {
//             ctx.drawImage(vector2, 670, 780, 360, 360);
//           };
//         });
//       };
//       const pipe1 = new Image();
//       const node1 = new Image();
//       const vector3 = new Image();
//       const node2 = new Image();
//       const pipe2 = new Image();
//       pipe1.src = "https://s2.loli.net/2024/03/01/aDp5fRXLrEkswiA.png";
//       node1.src = "https://s2.loli.net/2024/03/01/IqKXjQPkDZ4Y6ta.png";
//       vector3.src = "https://s2.loli.net/2024/03/01/6sxcNCaoTguM9yd.png";
//       node2.src = "https://s2.loli.net/2024/03/01/NVSfrOuMKdG7q6E.png";
//       pipe2.src = "https://s2.loli.net/2024/03/01/NEs9Zz3C2M8kgFd.png";
//       node1.onload = () => {
//         ctx.drawImage(node1, 1030, 780, 360, 360);
//       };
//       pipe1.onload = () => {
//         ctx.drawImage(pipe1, 1390, 780, 360, 360);
//       };
//       vector3.onload = () => {
//         ctx.drawImage(vector3, 1750, 780, 360, 360);
//       };
//       node2.onload = () => {
//         ctx.drawImage(node2, 2110, 780, 360, 360);
//       };
//       pipe2.onload = () => {
//         ctx.drawImage(pipe2, 2110, 1140, 360, 360);
//       };
//     } else if (currentState === "state2") {
//       // draw state2 content
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");
//       const vectorState = [
//         "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
//         "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
//       ];
//       let currentImageIndex = 0;
//       const vector3 = new Image();
//       vector3.src = vectorState[currentImageIndex];
//       vector3.onload = () => {
//         ctx.drawImage(vector3, 1750, 780, 360, 360);
//         const button = document.getElementById("myButton");
//         button.addEventListener("mouseover", () => {
//           currentImageIndex = (currentImageIndex + 1) % vectorState.length;
//           vector3.src = vectorState[currentImageIndex];
//           ctx.fillStyle = "#311f1f";
//           ctx.fillRect(1750, 780, 360, 360);
//           vector3.onload = () => {
//             ctx.drawImage(vector3, 1750, 780, 360, 360);
//           };
//         });
//         button.addEventListener("mouseout", () => {
//           currentImageIndex = (currentImageIndex + 1) % vectorState.length;
//           vector3.src = vectorState[currentImageIndex];
//           ctx.fillStyle = "#311f1f";
//           ctx.fillRect(1750, 780, 360, 360);
//           vector3.onload = () => {
//             ctx.drawImage(vector3, 1750, 780, 360, 360);
//           };
//         });
//       };
//       const pipe1 = new Image();
//       const node1 = new Image();
//       const vector2 = new Image();
//       const node2 = new Image();
//       const pipe2 = new Image();
//       vector2.src = "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png";
//       pipe1.src = "https://s2.loli.net/2024/03/01/oVdcZ436s5rtg9T.png";
//       node1.src = "https://s2.loli.net/2024/03/01/fxeip4yURNB23SK.png";
//       node2.src = "https://s2.loli.net/2024/03/01/NVSfrOuMKdG7q6E.png";
//       pipe2.src = "https://s2.loli.net/2024/03/01/NEs9Zz3C2M8kgFd.png";
//       vector2.onload = () => {
//         ctx.drawImage(vector2, 670, 780, 360, 360);
//       };
//       node1.onload = () => {
//         ctx.drawImage(node1, 1030, 780, 360, 360);
//       };
//       pipe1.onload = () => {
//         ctx.drawImage(pipe1, 1390, 780, 360, 360);
//       };
//       node2.onload = () => {
//         ctx.drawImage(node2, 2110, 780, 360, 360);
//       };
//       pipe2.onload = () => {
//         ctx.drawImage(pipe2, 2110, 1140, 360, 360);
//       };
//     } else if (currentState === "state3") {
//       // draw state3 content
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");
//       const pipe1 = new Image();
//       const node1 = new Image();
//       const vector2 = new Image();
//       const vector3 = new Image();
//       const node2 = new Image();
//       const pipe2 = new Image();
//       vector2.src = "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png";
//       pipe1.src = "https://s2.loli.net/2024/03/01/oVdcZ436s5rtg9T.png";
//       node1.src = "https://s2.loli.net/2024/03/01/fxeip4yURNB23SK.png";
//       vector3.src = "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png";
//       node2.src = "https://s2.loli.net/2024/03/01/GXiukj2JSZqCO1w.png";
//       pipe2.src = "https://s2.loli.net/2024/03/01/vJOzfbjwcAFKrZ7.png";
//       vector2.onload = () => {
//         ctx.drawImage(vector2, 670, 780, 360, 360);
//       };
//       node1.onload = () => {
//         ctx.drawImage(node1, 1030, 780, 360, 360);
//       };
//       pipe1.onload = () => {
//         ctx.drawImage(pipe1, 1390, 780, 360, 360);
//       };
//       vector3.onload = () => {
//         ctx.drawImage(vector3, 1750, 780, 360, 360);
//       };
//       node2.onload = () => {
//         ctx.drawImage(node2, 2110, 780, 360, 360);
//       };
//       pipe2.onload = () => {
//         ctx.drawImage(pipe2, 2110, 1140, 360, 360);
//       };
//     }
//   }

//   //When state3 is detected, click to switch to the Level2 page.
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (currentState === "state3") {
//       const timeoutId = setTimeout(() => {
//         document.addEventListener("click", handleClick);
//       }, 2000);
//       return () => {
//         clearTimeout(timeoutId);
//         document.removeEventListener("click", handleClick);
//       };
//     }
//   }, [currentState]);
//   const handleClick = () => {
//     navigate("/Level2");
//   };

//   return (
//     <>
//       <div>
//         <img
//           src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png"
//           className="img-fluid"
//         ></img>
//         <div className="second-image-container">
//           <canvas
//             ref={canvasRef}
//             width={2880}
//             height={1962}
//             style={{ width: "100%" }}
//           />
//           <p className="titleHead text-center titleHead-position-level1">
//             Level1
//           </p>
//           <p className="title text-center title-position-level1">
//             Make Sure that you really get into the program
//           </p>
//           <p className="tank-text text-center text-position-tank1">
//             You get an offer For <b>{session}</b>
//           </p>
//           <p className="tank-text-l text-center text-position-tank2">
//             Date: {date}
//           </p>
//           <p className="tank-text-l text-center text-position-tank3">
//             Modality: {modality}
//           </p>
//           <img
//             src="https://s2.loli.net/2024/03/14/gje5KCnMpRGTdm3.png"
//             className="label"
//           ></img>
//           <a className="label-text text-center"> Wanna change session? </a>
//           {currentState === "state1" && (
//             <>
//               <a href={portalLink}>
//                 <button id="myButton" className="LevelButton button1-position">
//                   Accept Offer
//                 </button>
//               </a>
//               <p className="DeadlineText deadline1-position">
//                 ‼️Before xx/xx‼️
//               </p>
//               <button className="LevelButton button2-position disabled">
//                 Pay deposite
//               </button>
//               <p className="DeadlineText deadline2-position disabled">
//                 ‼️Before xx/xx‼️
//               </p>
//             </>
//           )}
//           {currentState === "state2" && (
//             <>
//               <a href={portalLink}>
//                 <button id="myButton" className="LevelButton button2-position">
//                   Pay deposite
//                 </button>
//               </a>
//               <p className="DeadlineText deadline2-position">
//                 ‼️Before xx/xx‼️
//               </p>
//             </>
//           )}
//           {currentState === "state3" && (
//             <>
//               <img
//                 src="https://s2.loli.net/2024/03/01/IhHalxRcQvpwVmU.png"
//                 className="NextLevelHint"
//               ></img>
//               <p className="NextLevelHint-text ">Next Level</p>
//               <img
//                 src="https://s2.loli.net/2024/03/01/cHgwoVSxXznhbKI.png"
//                 className="Next-level-arrow"
//               ></img>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Level1;



import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Level1() {
  const portalLink = "https://connect.nyu.edu/manage/reader?id=72349a70-f65c-41b0-8ca6-cf9f04f565dd";
  const session = "session1";
  let date, modality;
  if (session === "session1") {
    date = "06/17-06/28";
    modality = "Online";
  } else if (session === "session2") {
    date = "07/08-07/19";
    modality = "In person";
  } else if (session === "session3") {
    date = "07/29-08/09";
    modality = "In person";
  }
  const canvasRef = useRef(null);
  const [currentState, setCurrentState] = useState("state3");

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

      const backgroundSrc = "https://s2.loli.net/2024/03/01/VTQcBUFINMaofJw.jpg";
      const boardSrc = "https://s2.loli.net/2024/03/01/KEc19oQPzG3YguX.png";
      const vector1Src = "https://s2.loli.net/2024/02/14/i3YQjHnLha78yev.png";
      const tankSrc = "https://s2.loli.net/2024/02/14/Eu3MjHzqg69aWRi.png";

      const stateImages = {
        state1: [
          "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
          "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
          "https://s2.loli.net/2024/03/01/aDp5fRXLrEkswiA.png",
          "https://s2.loli.net/2024/03/01/IqKXjQPkDZ4Y6ta.png",
          "https://s2.loli.net/2024/03/01/6sxcNCaoTguM9yd.png",
          "https://s2.loli.net/2024/03/01/NVSfrOuMKdG7q6E.png",
          "https://s2.loli.net/2024/03/01/NEs9Zz3C2M8kgFd.png",
        ],
        state2: [
          "https://s2.loli.net/2024/02/14/3Lmx6JblGoVXF2y.png",
          "https://s2.loli.net/2024/02/14/5zSIYWg2qDnTPAJ.png",
          "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png",
          "https://s2.loli.net/2024/03/01/oVdcZ436s5rtg9T.png",
          "https://s2.loli.net/2024/03/01/fxeip4yURNB23SK.png",
          "https://s2.loli.net/2024/03/01/NVSfrOuMKdG7q6E.png",
          "https://s2.loli.net/2024/03/01/NEs9Zz3C2M8kgFd.png",
        ],
        state3: [
          "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png",
          "https://s2.loli.net/2024/03/01/oVdcZ436s5rtg9T.png",
          "https://s2.loli.net/2024/03/01/fxeip4yURNB23SK.png",
          "https://s2.loli.net/2024/03/01/kmtzEQUSVanfFbd.png",
          "https://s2.loli.net/2024/03/01/GXiukj2JSZqCO1w.png",
          "https://s2.loli.net/2024/03/01/vJOzfbjwcAFKrZ7.png",
        ],
      };

      const [background, board, vector1, tank] = await loadImages([backgroundSrc, boardSrc, vector1Src, tankSrc]);
      const stateImgs = await loadImages(stateImages[currentState]);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background, 0, 0, 2880, 1900);
      ctx.drawImage(board, 1040, 10, 800, 400);
      ctx.drawImage(vector1, 315, 420, 360, 360);
      ctx.drawImage(tank, 315, 780, 360, 360);

      if (currentState === "state1") {
        ctx.drawImage(stateImgs[0], 670, 780, 360, 360);
        ctx.drawImage(stateImgs[1], 670, 780, 360, 360);
        ctx.drawImage(stateImgs[2], 1390, 780, 360, 360);
        ctx.drawImage(stateImgs[3], 1030, 780, 360, 360);
        ctx.drawImage(stateImgs[4], 1750, 780, 360, 360);
        ctx.drawImage(stateImgs[5], 2110, 780, 360, 360);
        ctx.drawImage(stateImgs[6], 2110, 1140, 360, 360);
      } else if (currentState === "state2") {
        ctx.drawImage(stateImgs[0], 670, 780, 360, 360);
        ctx.drawImage(stateImgs[1], 670, 780, 360, 360);
        ctx.drawImage(stateImgs[2], 670, 780, 360, 360);
        ctx.drawImage(stateImgs[3], 1030, 780, 360, 360);
        ctx.drawImage(stateImgs[4], 1390, 780, 360, 360);
        ctx.drawImage(stateImgs[5], 2110, 780, 360, 360);
        ctx.drawImage(stateImgs[6], 2110, 1140, 360, 360);
      } else if (currentState === "state3") {
        ctx.drawImage(stateImgs[0], 670, 780, 360, 360);
        ctx.drawImage(stateImgs[1], 1390, 780, 360, 360);
        ctx.drawImage(stateImgs[2], 1030, 780, 360, 360);
        ctx.drawImage(stateImgs[3], 1750, 780, 360, 360);
        ctx.drawImage(stateImgs[4], 2110, 780, 360, 360);
        ctx.drawImage(stateImgs[5], 2110, 1140, 360, 360);
      }
    };

    drawCanvas();
  }, [currentState]);

  const navigate = useNavigate();
  useEffect(() => {
    if (currentState === "state3") {
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", handleClick);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", handleClick);
      };
    }
  }, [currentState]);

  const handleClick = () => {
    navigate("/Level2");
  };

  return (
    <>
      <div>
        <img src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png" className="img-fluid" alt="Level 1" />
        <div className="second-image-container">
          <canvas ref={canvasRef} width={2880} height={1962} style={{ width: "100%" }} />
          <p className="titleHead text-center titleHead-position-level1">Level1</p>
          <p className="title text-center title-position-level1">Make Sure that you really get into the program</p>
          <p className="tank-text text-center text-position-tank1">
            You get an offer For <b>{session}</b>
          </p>
          <p className="tank-text-l text-center text-position-tank2">Date: {date}</p>
          <p className="tank-text-l text-center text-position-tank3">Modality: {modality}</p>
          <img src="https://s2.loli.net/2024/03/14/gje5KCnMpRGTdm3.png" className="label" alt="label" />
          <a className="label-text text-center" href={portalLink}> Wanna change session? </a>
          {currentState === "state1" && (
            <>
              <a href={portalLink}>
                <button id="myButton" className="LevelButton button1-position">Accept Offer</button>
              </a>
              <p className="DeadlineText deadline1-position">‼️Before xx/xx‼️</p>
              <button className="LevelButton button2-position disabled">Pay deposite</button>
              <p className="DeadlineText deadline2-position disabled">‼️Before xx/xx‼️</p>
            </>
          )}
          {currentState === "state2" && (
            <>
              <a href={portalLink}>
                <button id="myButton" className="LevelButton button2-position">Pay deposite</button>
              </a>
              <p className="DeadlineText deadline2-position">‼️Before xx/xx‼️</p>
            </>
          )}
          {currentState === "state3" && (
            <>
              <img src="https://s2.loli.net/2024/03/01/IhHalxRcQvpwVmU.png" className="NextLevelHint" alt="Next Level Hint" />
              <p className="NextLevelHint-text ">Next Level</p>
              <img src="https://s2.loli.net/2024/03/01/cHgwoVSxXznhbKI.png" className="Next-level-arrow" alt="Next Level Arrow" />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Level1;
