import React from "react";
import { LanguageToggle } from "./languageToggle";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            北京译帆科技
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                主营业务
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                业务专长
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                联系我们
              </a>
            </li>
            <li style={{ position: 'relative' }}>
              <LanguageToggle
                currentLang={props.currentLang}
                toggleLanguage={props.toggleLanguage}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
