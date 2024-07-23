import { useState } from "react";
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
    <div className="h-full w-full p-4">
      <div className="fixed top-4 right-4 z-20">
        <StatusPlayer
          life={initialState.player.health}
          attack={initialState.player.attack}
          defense={initialState.player.defense}
        />
      </div>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
      <Options
        options={script.scenes[currentScene].options}
        onSelect={handleOptionSelect}
      />
    </div>
  );
};
