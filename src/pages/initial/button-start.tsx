export const ButtonStart = ({ ...props }) => {
  return (
    <div className="relative flex justify-center items-center group">
      <button
        {...props}
        className="text-white py-2 px-6 rounded-full h-52 w-52 
        transform transition-transform duration-500 group-hover:scale-105 overflow-hidden
        bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg shadow-blue-500/50 "
        type="button"
      >
        <span className="text-gradient">Iniciar</span>
      </button>
      <div
        className="absolute h-72 w-72 border border-blue-300 rounded-full 
      animate-spin-slow flex items-center justify-center 
      transform transition-transform duration-500  group-hover:scale-105"
      >
        <div className="planet h-3 w-3 rounded-full bg-slate-500 "></div>
      </div>
      <div
        className="absolute h-[340px] w-[340px] border border-blue-300 rounded-full 
        animate-spin-reverse-slow flex items-center justify-center
        transform transition-transform duration-500 group-hover:scale-105"
      >
        <div className="planet h-4 w-4 rounded-full bg-lime-700 "></div>
      </div>
    </div>
  );
};
