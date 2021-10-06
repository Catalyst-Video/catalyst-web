import "./styles.css";
import React from "react";
import CatalystChat from "catalyst-vc-react";

export default function App({ domElement }) {
  const room = domElement.getAttribute("data-room");
  const appId = domElement.getAttribute("data-app-id");
  const name = domElement.getAttribute("data-name");
  const disableChat = domElement.hasAttribute("data-disable-chat");
  const disableSetupView = domElement.hasAttribute("data-disable-setup-view");
  const disableRefreshButton = domElement.hasAttribute(
    "data-disable-refresh-button"
  );

  const onEndCallPreEval = domElement.getAttribute("data-on-end-call");

  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      {/* <h1>
        <button
          onClick={() => eval(domElement.getAttribute("data-on-end-call"))}
        >
          test on end call
        </button>
        Data: {room} {appId} {name}{" "}
        {JSON.stringify({
          disableChat,
          disableSetupView,
          disableRefreshButton
        })}
      </h1> */}

      <div style={{ height: "100%", width: "100%" }}>
        <CatalystChat
          room={room}
          appId={appId}
          name={name}
          disableChat={disableChat}
          disableSetupView={disableSetupView}
          disableRefreshBtn={disableSetupView}
          // onEndCall={() => eval(onEndCallPreEval)}
        />
      </div>
    </div>
  );
}
