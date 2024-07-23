import { Chat } from "./pages/chat/chat";

export function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-space-gradient">
      <div className="flex justify-center  bg-zinc-900 border border-zinc-900 w-[600px] min-h-[700px] rounded-lg shadow-lg p-6">
        <Chat />
      </div>
    </div>
  );
}
