import React from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
     <div className="home-container">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 ">
      <div>
      <h1 className="text-4xl mb-4">
        <Link to="/letter-content">Mary's Letter</Link>
       
      </h1>
      <p className="text-white text-2xl mb-10 mt-10">
      He who fears being watched from the abyss
      will be unable to look into it himself.  <br></br> 
       The truth can only be obtained by pressing forward.
      </p>
      
      <img
       
       src="https://giffiles.alphacoders.com/255/25512.gif" 
       
       alt="james looking in the mirror"
       />
       </div>
      
       
      <div className="lg:col-span-2 ">
      <div className="grid grid-cols-2 ">
        <img
          className="w-full h-auto object-cover"
          src="https://w0.peakpx.com/wallpaper/160/769/HD-wallpaper-silent-downpour-dark-silent-hill-video-game-silent-hill-downpour-night.jpg"
          alt="Image "
        />
        <img
          className="w-full h-auto object-cover"
          src="https://w0.peakpx.com/wallpaper/6/502/HD-wallpaper-silent-downpour-dark-silent-hill-video-game-silent-hill-downpour-night.jpg"
          alt="Image 2"
        />
        <img
          className=""
          src="https://wallpapers.com/images/hd/silent-hill-foggy-road-lyozb816x1x0rg7r.jpg"
          alt="Image 3"
        />
        <img
          style={{ height: 'calc(100% + 2px)' }}
          src="https://e0.pxfuel.com/wallpapers/931/852/desktop-wallpaper-silent-hill.jpg"
          alt="Image 4"
        />
       
      </div>
      </div>
    </div>
    </div>
  );
};

export default Home;