import React, { Component } from "react";
import TextMessage from "./Text";
import EmojiMessage from "./Emoji";
import FileMessage from "./File";
import CardMessage from "./Card";
import ListMessage from "./List";
import QuickResponse from "./QuickResponse";
import chatIconUrl from "./../../assets/chat-icon.svg";

class Message extends Component {
  _renderMessageOfType(type) {
    switch (type) {
      case "text":
        return <TextMessage {...this.props.message} />;
      case "emoji":
        return <EmojiMessage {...this.props.message} />;
      case "file":
        return <FileMessage {...this.props.message} />;
      case "card":
        return <CardMessage {...this.props.message} />;
      case "list":
        return <ListMessage {...this.props.message} />;
      case "quickResponse":
        return <QuickResponse {...this.props.message} />;
      default:
        console.error(
          `Attempting to load message with unsupported file type '${type}'`
        );
    }
  }

  render() {
    let contentClassList = [
      "sc-message--content",
      this.props.message.author === "me" ? "sent" : "received"
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div
            className="sc-message--avatar"
            style={{
              backgroundImage: `url(${chatIconUrl})`
            }}
          />
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>
    );
  }
}

export default Message;
