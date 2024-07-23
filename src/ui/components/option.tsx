interface OptionsProps {
  options: any;
  onSelect: (option: string) => void;
}

const Options = ({ options, onSelect }: OptionsProps) => (
  <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-4">
    <span className="text-center text-white mb-4 italic">
      Escolha uma das opções para continuar na sua caminhada.
    </span>
    {Object.keys(options).map((optionKey) => (
      <button
        key={optionKey}
        className="border border-gray-600 bg-blue-900 text-white p-4 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out w-full max-w-xs"
        type="button"
        onClick={() => onSelect(optionKey)}
      >
        {options[optionKey].text}
      </button>
    ))}
  </div>
);

export default Options;
