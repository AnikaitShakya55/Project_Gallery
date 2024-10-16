import React from "react";
import styles from "./ProjectList.module.css";
import restImage from "../Assests/restaurantimage.jpg";
import clothImage from "../Assests/menImage.jpeg";
import reduxImage from "../Assests/reduxLogo.png";
import counterImage from "../Assests/Counter2 logo.png";
import mailImage from "../Assests/mailBoxlogo.jpg";
import filmImage from "../Assests/filmFetchr.png";
import trackerImage from "../Assests/tracker.png";
import dashImage from "../Assests/dashboard.png";

const projects = [
  {
    id: 1,
    title: '"Hichkee" - Online Restaurant Ordering System',
    link: "https://roastgodshorts.github.io/HichkeeRestaurant/",
    img: `${restImage}`,
  },
  {
    id: 2,
    title: '"MANVAN" - Online Men Clothing Store',
    link: "https://roastgodshorts.github.io/MANVAN-ECOMMERCE-WEBSITE",
    img: `${clothImage}`,
  },
  {
    id: 2,
    title: '"DashHub" - Searching and Data Visualization Platform ',
    link: "https://dashboard-app-five-pi.vercel.app",
    img: `${dashImage}`,
  },
  {
    id: 3,
    title: '"Inboxify" - Mailbox Service',
    link: "https://roastgodshorts.github.io/MAIL-BOX-CLIENT/",
    img: `${mailImage}`,
  },
  {
    id: 4,
    title: '"ReduxCartify" - Redux Cart Integration',
    link: "https://anikaitshakya55.github.io/ReduxCartify",
    img: `${reduxImage}`,
  },
  {
    id: 5,
    title: '"FilmFetchr" - Retrieve, Display, Add',
    link: "https://anikaitshakya55.github.io/FilmFetchr/",
    img: `${filmImage}`,
  },
  {
    id: 6,
    title: '"ExpenseTrackify" - Track Expenses Efficiently',
    link: "https://anikaitshakya55.github.io/ExpenseTrackify/",
    img: `${trackerImage}`,
  },
  {
    id: 7,
    title: '"ReduxCounterPlus" - Redux Counter Functionality',
    link: "https://anikaitshakya55.github.io/ReduxCounterPlus",
    img: `${counterImage}`,
  },
];

const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      <h2 className="text-4xl my-8 font-bold underline">PROJECTS</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="  mb-4 border border-gray-300 rounded-lg overflow-hidden hover:text-gray-900"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col  items-center bg-transparent rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-slate-950 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg"
                src={project.img}
                alt={project.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal bg-transparent">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {project.title}
                </h5>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                  Click to view the project
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
