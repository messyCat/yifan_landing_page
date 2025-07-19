import React from "react";
import "./header.css";
import { useTranslation } from 'react-i18next';

export const Header = (props) => {
  const { t } = useTranslation()
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              {/* Slogan 区域开始 */}
              <div className="header-slogan">
                {/* <div className="header-slogan-title">使命</div> */}
                <div className="header-slogan-main">{
                  props.data ? props.data.slogan : "Loading"
                }</div>
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
