const MainContent = () => {
  return (
    <>
    <div className="p-4 flex-1 overflow-hidden h-[40%] m-all-center items-center">
      <table className="table-auto border-collapse game-table">
        <tbody>
          <tr>
            <td className="w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300 items-center justify-center">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
            <td className="w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300 items-center justify-center">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
            <td className="w-20 h-20 border-b border-white border-slate-950 transition-colors duration-300 items-center justify-center">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
          </tr>
          <tr>
            <td className="w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
            <td className="w-20 h-20 border-r border-white border-b border-slate-950 transition-colors duration-300">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
            <td className="w-20 h-20 border-b border-white border-slate-950 transition-colors duration-300">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
          </tr>
          <tr>
            <td className="w-20 h-20 border-white border-r border-slate-950 transition-colors duration-300">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
            <td className="w-20 h-20 border-white border-r border-slate-950 transition-colors duration-300">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
            <td className="w-20 h-20 border-white border-slate-950 transition-colors duration-300">
              <div className="flex items-center justify-center hover:bg-blue-300">X</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="p-4 flex-1 overflow-hidden h-[20%] m-all-center items-center">
      <div className="player-turn player1">Its Muruga's turn</div>
    </div>
  </>
  );
};

export default MainContent;
