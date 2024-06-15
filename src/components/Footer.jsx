import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black text-white justify-between border-t border-gray-700 p-4">
      <div className="flex justify-between w-full max-w-5xl">
        <div className="flex items-center">
          <p className="text-[50px] font-bold tracking-wide paskowy gcolor text-[50px]">WAKEUP.</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[20px] gcolor">Copyright 2024 Wakeup.</p>
          <div className="flex gap-4 mt-2">
            <img src="/img/git.png" alt="GitHub" className="w-[40px] h-[40px] invert" />
            <img src="/img/web.png" alt="Website" className="w-[40px] h-[40px] invert" />
          </div>
        </div>
        <div className="w-[50px]"></div> {/* Empty div to balance the layout */}
      </div>
    </footer>
  );
}

export default Footer;
