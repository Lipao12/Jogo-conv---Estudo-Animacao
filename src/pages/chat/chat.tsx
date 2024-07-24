import { useEffect, useRef, useState } from "react";
import { initialState } from "../../assets/initial-state";
import script from "../../assets/script.json";
import { Message } from "../../ui/components/message";
import Options from "../../ui/components/option";
import { StatusPlayer } from "./status-player";

export const Chat = () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [messages, setMessages] = useState([
    {
      sender: initialState.messages[0].sender,
      text: initialState.messages[0].text,
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const personSpeakOption = (option: string) => {
    console.log(script.scenes[currentScene].options[option].text);
    const humanMessage = {
      sender: "person",
      text: script.scenes[currentScene].options[option].text,
    };
    setMessages((prevMessages) => [...prevMessages, humanMessage]);
    console.log(humanMessage);
    console.log(messages);
  };

  const changeSceene = (option: string) => {
    const nextScene = script.scenes[currentScene].options[option].nextScene;
    const newMessage = {
      sender: "narrator",
      text: script.scenes[nextScene].text,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setCurrentScene(nextScene);
  };

  const handleOptionSelect = (option: string) => {
    personSpeakOption(option);
    changeSceene(option);
  };
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between">
      <div className="fixed top-4 right-4 z-20">
        <StatusPlayer player={initialState.player} />
      </div>
      <div className="overflow-y-auto h-full mb-4">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <Options
        options={script.scenes[currentScene].options}
        onSelect={handleOptionSelect}
      />
    </div>
  );
};
