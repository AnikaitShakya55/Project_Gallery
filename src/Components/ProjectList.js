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
  },
  {
    id: 2,
    title: "MANVAN - Online Men Clothing Store",
    link: "https://man-van-ecommerce.vercel.app/",
    img: clothImage,
  },
  {
    id: 3,
    title: "DashHub - Searching and Data Visualization Platform",
    link: "https://dashboard-app-five-pi.vercel.app",
    img: dashImage,
  },
  {
    id: 8,
    title: "Hichkee - Online Restaurant Ordering System",
    link: "https://roastgodshorts.github.io/HichkeeRestaurant/",
    img: restImage,
  },
  {
    id: 4,
    title: "Inboxify - Mailbox Service",
    link: "https://roastgodshorts.github.io/MAIL-BOX-CLIENT/",
    img: mailImage,
  },
  {
    id: 5,
    title: "ReduxCartify - Redux Cart Integration",
    link: "https://anikaitshakya55.github.io/ReduxCartify",
    img: reduxImage,
  },
  {
    id: 6,
    title: "FilmFetchr - Retrieve, Display, Add",
    link: "https://anikaitshakya55.github.io/FilmFetchr/",
    img: filmImage,
  },
  {
    id: 7,
    title: "ExpenseTrackify - Track Expenses Efficiently",
    link: "https://anikaitshakya55.github.io/ExpenseTrackify/",
    img: trackerImage,
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
            className="border border-gray-300 rounded-lg overflow-hidden hover:text-gray-900"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full items-center bg-transparent rounded-lg shadow hover:bg-slate-950 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full h-48"
                src={project.img}
                alt={project.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal bg-transparent">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-white text-center">
                  {project.title}
                </h5>
                {/* <p className="mb-3 font-normal text-white dark:text-gray-400 text-center">
                  Click to view the project
                </p> */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
