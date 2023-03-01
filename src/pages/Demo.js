import React, { useEffect, useRef, useState } from 'react';
import {
  faMicrophoneLinesSlash,
  faMicrophoneLines,
  faLocationArrow,
  faSearch,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Demo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import getMessage from '../components/Getmessage';

export const Demo = () => {
  // const [voiceText, setVoiceText] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [mic, setMic] = useState(true);
  const [message, setMessage] = useState({});
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  // const voiceMsg = new SpeechSynthesisUtterance();
  // voiceMsg.text = voiceText;
  const refreshEvent = () => {
    setMessages([]);
    resetTranscript();
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (message.text) {
      setIsTyping(true);
      console.log('message', message);
      setMessages([...messages, message]);
      const temp = message;
      setMessage({ text: '', type: 'sent' });
      const value = await getMessage.Ans({ prompt: temp.text });
      // setVoiceText(value);
      setIsTyping(false);
      setMessages([...messages, temp, { text: value, type: 'received' }]);
    } else {
      if (transcript) {
        setIsTyping(true);
        console.log('message', transcript);
        const message = { text: transcript, type: 'sent' };
        setMessages([...messages, message]);

        const temp = message;
        setMessage({ text: '', type: 'sent' });
        const value = await getMessage.Ans({ prompt: temp.text });
        // setVoiceText(value);
        setIsTyping(false);
        setMessages([...messages, temp, { text: value, type: 'received' }]);
      }
    }
    resetTranscript();
  };
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // useEffect(() => {
  //   window.speechSynthesis.speak(voiceMsg);
  //   setVoiceText('');
  // }, [voiceMsg]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error('Browser is not Support Speech Recognition.');
  }

  const micEvent = () => {
    setMic(!mic);
    if (mic) {
      // microphoneRef.current.classList.add('listening');
      SpeechRecognition.startListening({
        continuous: true,
      });
    } else {
      // microphoneRef.current.classList.remove('listening');
      SpeechRecognition.stopListening();
    }
    console.log(mic);
  };

  return (
    <>
      <div>
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-3 chat">
              <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Select Model..."
                      name=""
                      className="form-control search"
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text search_btn">
                        <i className="fas fa-search">
                          <FontAwesomeIcon icon={faSearch} />
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body contacts_body">
                  <div className="contacts">
                    <li className="active">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            className="rounded-circle user_img"
                            alt="test"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <span>text-davinci003</span>
                        </div>
                      </div>
                    </li>
                    <li className="active">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            className="rounded-circle user_img"
                            alt="test"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <span>text-davinci002</span>
                        </div>
                      </div>
                    </li>
                    <li className="active ">
                      <div className="d-flex bd-highlight ">
                        <div className="img_cont">
                          <img
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            className="rounded-circle user_img"
                            alt="test"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <span>code-davinci003</span>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
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
                      {isTyping ? (
                        <div className="typing">
                          <div className="typing__dot"></div>
                          <div className="typing__dot"></div>
                          <div className="typing__dot"></div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <span id="action_menu_btn">
                    <i className="fas fa-ellipsis-v">
                      <FontAwesomeIcon
                        icon={faRefresh}
                        onClick={refreshEvent}
                      />
                    </i>
                  </span>
                </div>
                <div className="card-body msg_card_body">
                  {messages ? (
                    messages.map((message, index) =>
                      message.type !== 'sent' ? (
                        <div
                          key={index}
                          className="d-flex justify-content-start mb-4"
                        >
                          <div className="img_cont_msg">
                            <img
                              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                              className="rounded-circle user_img_msg"
                              alt="GPT"
                            />
                          </div>
                          <div className="msg_cotainer">
                            {message.text}
                            <span className="msg_time"></span>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="d-flex justify-content-end mb-4"
                        >
                          <div className="msg_cotainer_send">
                            {message.text}
                            <span className="msg_time_send"></span>
                          </div>
                          <div className="img_cont_msg">
                            <img
                              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                              className="rounded-circle user_img_msg"
                              alt="You"
                            />
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <></>
                  )}
                  <div ref={lastMessageRef}></div>
                </div>

                <div className="card-footer">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span
                        className="input-group-text attach_btn"
                        ref={microphoneRef}
                        onClick={micEvent}
                      >
                        <FontAwesomeIcon
                          icon={
                            !mic ? faMicrophoneLinesSlash : faMicrophoneLines
                          }
                        />
                      </span>
                    </div>
                    <textarea
                      // name=""
                      className="form-control type_msg"
                      placeholder="Type your message..."
                      value={message.text || transcript}
                      onChange={(e) =>
                        setMessage({
                          text: e.target.value,
                          type: 'sent',
                        })
                      }
                    ></textarea>
                    <div className="input-group-append">
                      <span
                        className="input-group-text send_btn"
                        onClick={sendMessage}
                      >
                        <i className="fas fa-location-arrow">
                          <FontAwesomeIcon icon={faLocationArrow} />
                        </i>
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
