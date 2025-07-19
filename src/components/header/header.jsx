import React from "react";
import "./header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              {/* Slogan 区域开始 */}
              <div className="header-slogan">
                {/* <div className="header-slogan-title">使命</div> */}
                <div className="header-slogan-main">译路同行，未来有你。</div>
              </div>
              {/* Slogan 区域结束 */}
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
