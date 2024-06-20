// "use client";
// import React from 'react';

// const Video: React.FC = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/images/video.mp4"
//         autoPlay
//         loop
//         muted
//       />
//       <div className="relative z-10 flex items-center justify-center w-full h-full">
//         {/* Add any content you want to overlay on the video here */}
//       </div>
//     </div>
//   );
// };

// export default Video;

"use client";
import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/962839608?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full object-cover"
        title="Vimeo Video"
      ></iframe>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Add any content you want to overlay on the video here */}
      </div>
    </div>
  );
};

export default Video;
