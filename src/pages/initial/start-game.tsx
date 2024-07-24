import { ButtonStart } from "./button-start";

interface StartPageProps {
  setStartGame: () => void;
}

export const StartPage = ({ setStartGame }: StartPageProps) => {
  return (
    <div className="flex justify-between flex-col p-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-white">
          Bem-vindo à Cosmic Expedition!
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Prepare-se para uma jornada intergaláctica como nunca antes. Sua
          aventura começa agora!
        </p>
      </div>
      <div>
        <ButtonStart onClick={setStartGame} />
      </div>
    </div>
  );
};
