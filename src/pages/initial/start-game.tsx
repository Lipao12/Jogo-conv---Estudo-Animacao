import { ButtonStart } from "./button-start";

interface StartPageProps {
  setStartGame: (isStart: boolean) => void;
}

export const StartPage = ({ setStartGame }: StartPageProps) => {
  const handleStartGame = () => {
    setStartGame(true);
  };
  return (
    <div className="flex justify-between flex-col">
      <div></div>
      <div>
        <ButtonStart onClick={handleStartGame} />
      </div>
    </div>
  );
};
