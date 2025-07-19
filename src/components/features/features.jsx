import React from "react";
import "./features.css";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>主营业务</h2>
          <h4>我们提供全方位的语言解决方案，覆盖全球 超过30种语言 的互译</h4>
        </div>
        <div className="col-md-10 col-md-offset-1" style={{ float: 'none', margin: '0 auto' }}>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  {d.text_list ? d.text_list.map((text, j) => (
                    <p key={j}>{text}</p>
                  )) : null}
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
