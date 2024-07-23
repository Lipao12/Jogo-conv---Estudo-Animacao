interface MessageProps {
  sender: string;
  text: string;
}

export const Message = ({ sender, text }: MessageProps) => {
  const baseStyle = `p-4 rounded-2xl max-w-xs text-white`;
  const personStyle = `${baseStyle} ml-auto bg-green-800`;
  const narratorStyle = `${baseStyle} mr-auto bg-zinc-700`;
  return (
    <div
      className={`flex ${
        sender === "person" ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div className={sender === "person" ? personStyle : narratorStyle}>
        <p>{text}</p>
      </div>
    </div>
  );
};
