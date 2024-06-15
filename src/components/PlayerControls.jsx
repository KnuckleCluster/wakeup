import React from 'react';

function PlayerControls() {
  return (
    <div className="flex flex-col items-center mr-4">
      <span>4:20</span>
      <input type="range" className="w-[400px]" />
      <div className="flex space-x-4 mt-2">
        <button className="h-[30px] w-[30px]"><img src="img/volume.png" alt="volume" /></button>
        <button className="h-[30px] w-[30px]"><img src="img/prev.png" alt="previous song" /></button>
        <button className="h-[30px] w-[30px]"><img src="img/play.png" alt="play song" /></button>
        <button className="h-[30px] w-[30px]"><img src="img/next.png" alt="next song" /></button>
        <button className="h-[30px] w-[30px]"><img src="img/repeat.png" alt="repeat song" /></button>
      </div>
    </div>
  );
}

export default PlayerControls;
