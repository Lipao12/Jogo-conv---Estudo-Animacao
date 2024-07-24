import { useState } from "react";
import { Chat } from "./pages/chat/chat";
import { StartPage } from "./pages/initial/start-game";

export function App() {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen bg-space-gradient">
      <div className="flex justify-center  bg-zinc-900 border border-zinc-900 w-[600px] min-h-[700px] rounded-lg shadow-lg p-6">
        {isStart ? <Chat /> : <StartPage setStartGame={setIsStart} />}
      </div>
    </div>
  );
}
