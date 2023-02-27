import React from 'react';
import {
  faMicrophoneLinesSlash,
  faMicrophoneSlash,
  faMicrophoneLines,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Demo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Demo = () => {
  return (
    <>
      <div>
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-3 chat"></div>
            <div className="col-md-8 col-xl-6 chat">
              <div className="card">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user_img"
                        alt="GPT"
                      />
                      <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                      <span>Chat with GPT</span>
                    </div>
                  </div>
                  <span id="action_menu_btn">
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                </div>
                <div className="card-body msg_card_body">
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user_img_msg"
                        alt="GPT"
                      />
                    </div>
                    <div className="msg_cotainer">
                      Hi, how are you samim?
                      <span className="msg_time">8:40 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Hi Khalid i am good tnx how about you?
                      <span className="msg_time_send">8:55 AM, Today</span>
                    </div>
                    <div className="img_cont_msg"></div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text attach_btn">
                        <FontAwesomeIcon icon={faMicrophoneLines} />
                      </span>
                    </div>
                    <textarea
                      name=""
                      className="form-control type_msg"
                      placeholder="Type your message..."
                    ></textarea>
                    <div className="input-group-append">
                      <span className="input-group-text send_btn">
                        <i className="fas fa-location-arrow"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
