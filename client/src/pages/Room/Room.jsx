import React from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import "./Room.css";
import InputOutput from "../../components/InputOutput/InputOutput";
import Editor from "../../components/Editor/Editor";
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import Message from "../../components/Message/Message";
import VoiceChat from "../../components/VoiceChat/VoiceChat";

const Room = () => {
  return (
    <>
      <div className="root-room">
        <ReflexContainer orientation="horizontal">
          <ReflexElement style={{ paddingTop: "1rem" }}>
            <ReflexContainer orientation="vertical">
              <ReflexElement>
                <ReflexContainer orientation="horizontal">
                  <ReflexElement className="pane-color">
                    <TabsPanel />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
              {/* End of 1st content */}
              <ReflexSplitter className="splitter splitter-vertical" />
              <ReflexElement flex={0.45}>
                <ReflexContainer orientation="horizontal">
                  <ReflexElement style={{ display: "flex" }}>
                    <Editor />
                  </ReflexElement>
                  <ReflexSplitter className="splitter splitter-horizontal" />
                  <ReflexElement flex={0.3}>
                    <InputOutput />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
              <ReflexSplitter className="splitter splitter-vertical" />
              <ReflexElement>
                <ReflexContainer orientation="horizontal">
                  {/* 0.12 */}
                  <ReflexElement className="pane-color" flex={0.22}>
                    <VoiceChat />
                  </ReflexElement>
                  <ReflexSplitter className="splitter splitter-horizontal" />
                  <ReflexElement className="chat-app">
                    <Message />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
          <ReflexElement className="footer" flex={0.028}>
            Made with <span>&#9829;</span> by Tusshar Paul{"  "}•{"  "}
            <a href="https://github.com/" target="__blank">
              Github
            </a>
          </ReflexElement>
        </ReflexContainer>
      </div>
    </>
  );
};

export default Room;
