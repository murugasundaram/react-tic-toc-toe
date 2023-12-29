const MainContent = () => {
  return (
    <main className="flex-grow p-4 overflow-y-auto flex justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        <div className="max-w-full overflow-x-auto">

        <table className="table-auto border-collapse game-table">
          <tbody>
            <tr>
              <td className="w-16 h-16 border-r border-white border-b border-slate-950 transition-colors duration-300 items-center justify-center">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
              <td className="w-16 h-16 border-r border-white border-b border-slate-950 transition-colors duration-300 items-center justify-center">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
              <td className="w-16 h-16 border-b border-white border-slate-950 transition-colors duration-300 items-center justify-center">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
            </tr>
            <tr>
              <td className="w-16 h-16 border-r border-white border-b border-slate-950 transition-colors duration-300">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
              <td className="w-16 h-16 border-r border-white border-b border-slate-950 transition-colors duration-300">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
              <td className="w-16 h-16 border-b border-white border-slate-950 transition-colors duration-300">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
            </tr>
            <tr>
              <td className="w-16 h-16 border-white border-r border-slate-950 transition-colors duration-300">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
              <td className="w-16 h-16 border-white border-r border-slate-950 transition-colors duration-300">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
              <td className="w-16 h-16 border-white border-slate-950 transition-colors duration-300">
                <div className="flex items-center justify-center hover:bg-blue-300">X</div>
              </td>
            </tr>
          </tbody>
        </table>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="player-turn player1">Its Muruga's turn</div>
      </div>
    </main>
  );
};

export default MainContent;
