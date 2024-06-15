import React from 'react';
import PlayerControls from './PlayerControls';

function NowPlaying() {
  return (
    <div className="flex justify-center items-center bg-gray-900 p-4 border-t border-gray-700">
      <div className="flex items-center mr-4">
        <div className="w-12 h-12 bg-gray-700 rounded-md mr-4"></div>
        <div className="w-[200px]">
          <div className="text-lg"><marquee>Song Title</marquee></div>
          <div className="text-sm text-gray-400">Artist name</div>
        </div>
      </div>
      <PlayerControls />
    </div>
  );
}

export default NowPlaying;
