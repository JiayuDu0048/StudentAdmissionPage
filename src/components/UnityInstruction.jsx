import { useNavigate } from "react-router-dom";
function UnityInstruction() {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png"
        className="img-fluid"
      ></img>
      <div className="instruction-container">
        <h1>
          <strong>Unity & Package Download Instruction</strong>{" "}
        </h1>
        <div className="instruction-box">
          <h2>Step1: Download the right version of Unity</h2>
          <p>Unity Version required: 2021.3.25f1</p>
          <p>
            Here is the link to download Unity:{" "}
            <a href="https://unity.com/">https://unity.com/</a>
          </p>
          <p>
            Here is a short tutorial teaching you how to install Unity step by
            step:{" "}
            <a href="https://www.youtube.com/watch?v=yGNdgpTzWW4">
              https://www.youtube.com/watch?v=yGNdgpTzWW4
            </a>
          </p>
        </div>
        <div className="instruction-box">
          <h2>
            Step2: Download the unity package of our program and try to run it
          </h2>
          <p>
            Here to download the Unity package:{" "}
            <a href="">https://google.drive/download</a>
          </p>
          <p>
            <strong>What to do with it:</strong>
          </p>
          <p>
            Download it - Open it with Unity - Enter your N Number in the pop-up
            window and click confirm
          </p>
          <p>
            <strong>Why we need this package:</strong>
          </p>
          <p>
            1. To make sure that you already downloaded and installed the right
            version of Unity
          </p>
          <p>
            (in case that you come to the site and spend the whole morning
            waiting for the download and installation)
          </p>
          <p>
            2. To make sure that your laptop is powerful enough for you to enjoy
            our program
          </p>
          <p>
            (in case that you arrive with an antique windows xp laptop and can
            only sit and watch everybody else coding)
          </p>
        </div>
      </div>
    </>
  );
}
export default UnityInstruction;
