import React, { Component } from "react";
import { render } from "react-dom";
import { Launcher } from "../../src";
import messageHistory from "./messageHistory";
import TestArea from "./TestArea";
import Header from "./Header";
import Footer from "./Footer";
import monsterImgUrl from "./../assets/monster.png";
import Highlight from "react-highlight.js";
import "./../assets/styles";

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: false
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [
        ...this.state.messageList,
        {
          type: "file",
          author: "me",
          data: {
            url: objectURL,
            fileName: fileList[0].name
          }
        }
      ]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen
        ? this.state.newMessagesCount
        : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  }

  __renderCardMessage() {
    const newMessagesCount = this.state.isOpen
      ? this.state.newMessagesCount
      : this.state.newMessagesCount + 1;
    this.setState({
      newMessagesCount: newMessagesCount,
      messageList: [
        ...this.state.messageList,
        {
          author: "them",
          type: "card",
          data: {
            title: "Welcome!",
            image_url: "https://via.placeholder.com/300.png/09f/fff",
            subtitle: "We have the right hat for everyone.",
            buttons: [
              {
                type: "web_url",
                url: "https://petersfancybrownhats.com",
                title: "View Website"
              },
              {
                type: "postback",
                title: "Start Chatting",
                payload: "DEVELOPER_DEFINED_PAYLOAD"
              }
            ]
          }
        }
      ]
    });
  }

  __renderListMessage() {
    const newMessagesCount = this.state.isOpen
      ? this.state.newMessagesCount
      : this.state.newMessagesCount + 1;
    this.setState({
      newMessagesCount: newMessagesCount,
      messageList: [
        ...this.state.messageList,
        {
          author: "them",
          type: "list",
          data: {
            title: "Welcome!",
            image_url: "https://www.fillmurray.com/300/300",
            subtitle: "We have the right hat for everyone.",
            elements: [
              {
                title: "Classic T-Shirt Collection",
                subtitle: "See all our colors",
                image_url: "https://www.fillmurray.com/60/60",
                buttons: [
                  {
                    title: "View",
                    type: "web_url",
                    url: "https://peterssendreceiveapp.ngrok.io/collection",
                    messenger_extensions: true,
                    webview_height_ratio: "tall",
                    fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                  }
                ]
              },
              {
                title: "Classic Blue T-Shirt",
                image_url: "http://placeimg.com/60/60/any",
                subtitle: "100% Cotton, 200% Comfortable",
                default_action: {
                  type: "web_url",
                  url: "https://peterssendreceiveapp.ngrok.io/view?item=101",
                  messenger_extensions: true,
                  webview_height_ratio: "tall",
                  fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                },
                buttons: [
                  {
                    title: "Shop Now",
                    type: "web_url",
                    url: "https://peterssendreceiveapp.ngrok.io/shop?item=101",
                    messenger_extensions: true,
                    webview_height_ratio: "tall",
                    fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                  }
                ]
              }
            ]
          }
        }
      ]
    });
  }
  __renderQuickResponseMessage() {
    const newMessagesCount = this.state.isOpen
      ? this.state.newMessagesCount
      : this.state.newMessagesCount + 1;
    this.setState({
      newMessagesCount: newMessagesCount,
      messageList: [
        ...this.state.messageList,
        {
          author: "them",
          type: "quickResponse",
          data: {
            text: "What do you want to do next?",
            buttons: [
              {
                type: "web_url",
                url: "https://www.messenger.com",
                title: "Visit Messenger"
              },
              {
                type: "web_url",
                url: "https://www.messenger.com",
                title: "Visit Page"
              },
              {
                type: "postback",
                payload: "BACK_SLEEP",
                title: "Back to Sleep"
              }
            ]
          }
        }
      ]
    });
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TestArea
          onMessage={this._sendMessage.bind(this)}
          onRenderCardMessage={this.__renderCardMessage.bind(this)}
          onRenderListMessage={this.__renderListMessage.bind(this)}
          onRenderQuickResponseMessage={this.__renderQuickResponseMessage.bind(
            this
          )}
        />
        <Launcher
          agentProfile={{
            teamName: "react-chat-window",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          onFilesSelected={this._onFilesSelected.bind(this)}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick.bind(this)}
          isOpen={this.state.isOpen}
          showEmoji
        />
        <img className="demo-monster-img" src={monsterImgUrl} />
        <Footer />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
