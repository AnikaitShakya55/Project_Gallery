import React from "react";

const videoData = [
  {
    id: 1,
    videoLink: "https://www.loom.com/embed/2c9784800ed145968b4446973942d829",
    description: "Project Functionalities Overview",
  },
  {
    id: 2,
    videoLink: "https://www.loom.com/embed/b6b77fb48df741d4b086dfa08b3a7f3f",
    description: "Tracking Functionality Overview with Code",
  },
  {
    id: 3,
    videoLink: "https://www.loom.com/embed/9d0c8daaebe844ed8028bcce902a31ba",
    description: "Setting Page Logic Functionality with UI",
  },
  {
    id: 4,
    videoLink: "https://www.loom.com/embed/3089fd0a7a9447d78ece34e87b38ffba",
    description: "Market Place Overview",
  },
  {
    id: 5,
    videoLink: "https://www.loom.com/embed/c05883a59ef2414bb5dd3fa8a5650360",
    description: "Project Tracking and Multiple Deletion Functionality",
  },
];

const ConceptsLearned = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto mt-20 ">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Tackling Complex Challenges in Company Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="border border-gray-300 p-4 rounded-md shadow-md w-80"
          >
            <iframe
              src={video.videoLink}
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen
              title={video.description}
            />
            <p className="mt-2 text-center">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptsLearned;
