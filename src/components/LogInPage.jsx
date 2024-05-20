import { Link } from "react-router-dom";
function LogInPage() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <p className="loginHead">Login</p>
          <div className="alertBox">
            <p className="alert">To log in, please enter your N number.</p>
          </div>
          <div className="input-pos">
            <div className="row mb-6">
              <label
                for="colFormLabel"
                className="col-sm-4 col-form-label"
                style={{ fontFamily: "Grandstander", fontSize: "1.2vw" }}
              >
                N Number
              </label>
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="colFormLabel"
                  placeholder="N000000"
                ></input>
              </div>
            </div>
            <Link
              to="/welcome"
              className="btn btn-primary"
              style={{ marginTop: "5%" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <img
        src="https://s2.loli.net/2024/02/13/LWfVRlubM36wygs.png"
        className="img-fluid"
      ></img>
    </>
  );
}
export default LogInPage;
