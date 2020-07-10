import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div class="row">

            <div class="side">
              <div class="fakeimg" >
                <img className="up-img" src="./up.png" alt="upload" />
                <br />
                <button className="up-butt" > + </button>
                <h3 className="up-desc" >Click here to upload
              your intro video</h3>
              </div>
            </div>

            <div class="main" >
              <div class="profile" >
                <h1 className="name" >Prateek Rao</h1>
                <h2 className="position" >Product Design Expert</h2>
                <figure class="avatar" >
                  <img className="profile-pic" src="./dp.png" alt="dp" />
                </figure>
                <figure class="avatar2" >
                  <img className="profile-pic" src="./edit.png" alt="dp" />
                </figure>
                <figure class="avatar3" >
                  <img className="profile-pic" src="./share.png" alt="dp" />
                </figure>
              </div>
              <p className="user-desc" > I am product designer with 15 years of expertise. I have
              worked on different counsumer facing products on all major
              platforms. If you are an enterpreneur looking for advise on
                taking your product to the market, I am your guy. </p>
              <hr />

              <div class="add-service" >
                <h1 className="add-title" >Add a service</h1>
                <button className="up-but" > + </button>
              </div>

              <div class="add-block" >
                <h3 className="add-desc" >Add your first service,
                let the Pros notice you</h3>
                <img className="add-img" src="./find.png" alt="upload" />
              </div>

            </div>
          </div>

        </div>
        <div class="footer">
          <div className="logo" >
            <p className="superpro">super<b>pro</b></p>
            <p className="mii">Made with <span className="heart"></span> in India</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);