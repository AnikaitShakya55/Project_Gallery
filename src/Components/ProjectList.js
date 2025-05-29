import React from "react";
import styles from "./ProjectList.module.css";
import restImage from "../Assests/restaurantimage.jpg";
import clothImage from "../Assests/menImage.jpeg";
import reduxImage from "../Assests/reduxLogo.png";
import mailImage from "../Assests/mailBoxlogo.jpg";
import filmImage from "../Assests/filmFetchr.png";
import trackerImage from "../Assests/tracker.png";
import dashImage from "../Assests/dashboard.png";

const projects = [
  {
    id: 1,
    title: "ReduxCounterPlus - Redux Counter Functionality",
    link: "https://anikaitshakya55.github.io/ReduxCounterPlus",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPI55GSJmjNDtnhu8LIF1qqjbbw3vj17d2Bg&s",
    // github_link: "https://github.com/anikaitshakya55/ReduxCounterPlus",
  },
  {
    id: 2,
    title: "MANVAN - Online Men Clothing Store",
    link: "https://man-van-ecommerce.vercel.app/",
    img: clothImage,
    github_link: "https://github.com/AnikaitShakya55/ManVan_Ecommerce",
  },
  {
    id: 3,
    title: "DashHub - Searching and Data Visualization Platform",
    link: "https://dashboard-app-five-pi.vercel.app",
    img: dashImage,
    github_link: "https://github.com/AnikaitShakya55/Dashboard-App",
  },
  {
    id: 8,
    title: "Hichkee - Online Restaurant Ordering System",
    link: "https://hichkee.vercel.app",
    img: restImage,
    github_link: "https://github.com/AnikaitShakya55/Hichkee",
  },
  {
    id: 9,
    title: "Twitter-X - Twitter Clone Project",
    // link: "https://hichkee.vercel.app",
    img: "https://images.macrumors.com/t/NKjHcwrcQueA4BBHpB26DimMS64=/1600x0/article-new/2021/03/Twitter-Feature.jpg",
    github_link: "https://github.com/AnikaitShakya55/Twitter_Clone_Project",
  },
  {
    id: 4,
    title: "Inboxify - Mailbox Service System",
    link: "https://roastgodshorts.github.io/MAIL-BOX-CLIENT/",
    img: mailImage,
    // github_link: "https://github.com/roastgodshorts/MAIL-BOX-CLIENT",
  },
  {
    id: 5,
    title: "ReduxCartify - Redux Cart Integration",
    link: "https://anikaitshakya55.github.io/ReduxCartify",
    img: reduxImage,
    // github_link: "https://github.com/anikaitshakya55/ReduxCartify",
  },
  {
    id: 6,
    title: "FilmFetchr - Retrieve, Display, Add",
    link: "https://anikaitshakya55.github.io/FilmFetchr/",
    img: filmImage,
    // github_link: "https://github.com/anikaitshakya55/FilmFetchr",
  },
  {
    id: 7,
    title: "ExpenseTrackify - Track Expenses Efficiently",
    link: "https://anikaitshakya55.github.io/ExpenseTrackify/",
    img: trackerImage,
    // github_link: "https://github.com/anikaitshakya55/ExpenseTrackify",
  },
  {
    id: 10,
    title: "Connectly - Full Stack Chat Application",
    // link: "https://anikaitshakya55.github.io/ExpenseTrackify/",
    img: "https://static.vecteezy.com/system/resources/previews/000/561/500/non_2x/chat-app-logo-icon-vector.jpg",
    github_link:
      "https://github.com/AnikaitShakya55/Connectly_FullStack_Project",
  },
];

const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      <h2 className="text-4xl my-8 font-bold underline text-center">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:text-gray-900 bg-gray-900"
          >
            <img
              className="object-cover w-full h-48"
              src={project.img}
              alt={project.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal bg-transparent">
              <h5 className="mb-4 text-lg font-bold tracking-tight text-white text-center">
                {project.title}
              </h5>
              <div className="flex justify-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                  >
                    Live Demo
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded shadow"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
