import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>联系我们</h2>
                <p>
                  北京译帆科技信息咨询有限公司
                </p>
              </div>
              {/* <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form> */}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>联系方式</h3>
              <p>
                <span>
                  <i className="fa-solidfa-map-marker-alt"></i> 地址
                </span>
                {props.data && props.data.content ? props.data.content.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa-solidfa-phone"></i> Phone
                </span>{" "}
                {props.data && props.data.content ? props.data.content.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa-solidfa-envelope"></i> Email
                </span>{" "}
                {props.data && props.data.content ? props.data.content.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <p className="report-wrapper">
              {/* <a href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=91330106673959654P-SAIC_SHOW_10000091330106673959654P1710919400712&amp;signData=MEUCIQDEkCd8cK7%2Fyqe6BNMWvoMPtAnsgKa7FZetfPkjZMsvhAIgOX1G9YC6FKyndE7o7hL0KaBVn4f%20V%2Fiof3iAgpsV09o%3D" target="_blank" class="_4598709a854bea355ceb6ef9f23f10d4_ali-report-link" rel="noreferrer">
                <img src="//gw.alicdn.com/tfs/TB1GxwdSXXXXXa.aXXXXXXXXXXX-65-70.gif" class="_4598709a854bea355ceb6ef9f23f10d4_ali-report-img" alt="" loading="lazy"/>
              </a> */}
               {/* <a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank" class="_4598709a854bea355ceb6ef9f23f10d4_ali-report-link" rel="noreferrer">
                <img src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" class="_4598709a854bea355ceb6ef9f23f10d4_ali-report-img" alt="浙公网安备 33010602009975号" loading="lazy"/>
              <span class="_4598709a854bea355ceb6ef9f23f10d4_ali-report-link-text">浙公网安备 33010602009975号</span>
              </a>
              <a href="https://beian.miit.gov.cn/" target="_blank" class="_4598709a854bea355ceb6ef9f23f10d4_ali-report-link" rel="noreferrer">
                <span class="">京ICP备2025141239号</span>
              </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};
