import React from 'react';
import SearchBar from './components/SearchBar';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex justify-center items-center py-4">
        <h1 className="font-bold paskowy text-[30px] gcolor">WAKEUP.</h1>
        <SearchBar />
      </header>
      <main className="flex-1 flex flex-col justify-center items-center bg-gray-800">
        {/* Main content area for displaying songs, playlists, etc. */}
      </main>
      <NowPlaying />
      <Footer />
    </div>
  );
}

export default App;
