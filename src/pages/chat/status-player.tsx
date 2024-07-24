export const StatusPlayer = ({ player }: any) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <i className="fas fa-heart mr-2"></i>
        <span>{player.health}</span>
      </div>
      <div className="border mb-2 border-gray-600" />
      <div className="flex items-center mb-2">
        <i className="fas fa-khanda  mr-2"></i>
        <span>{player.attack}</span>
        <i className="fas fa-shield-alt mr-2 ml-4"></i>
        <span>{player.defense}</span>
      </div>
    </div>
  );
};
