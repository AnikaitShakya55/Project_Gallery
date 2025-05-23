import React from "react";

const expArr = [
  {
    company: "Easenode Tech Private Limited",
    designation: "Senior Full Stack Developer",
    duration: "June 2024 – Present",
    projects: [
      {
        title: "Full Stack SaaS Development",
        description:
          "Designed and implemented a seamless user experience on a developer-centric SaaS platform, including onboarding, workspace creation, and software purchases through an integrated marketplace. Enabled real-time tracking of software usage via Easexpense Tracker to enhance transparency and engagement.",
      },
      {
        title: "E-Commerce & Billing Integration",
        description:
          "Developed a scalable marketplace with 400+ applications ,supporting one-time and recurring payments using Stripe and Razorpay. Implemented secure billing workflows and automated invoice management for streamlined transactions.",
      },
      {
        title: "MyApps Module",
        description:
          "Managed subscriptions, renewals, and invoice viewing for users in a centralized dashboard.",
      },
      {
        title: "AI CIO (AI Assistant)",
        description:
          "Trained AI to assist with user profile queries and enabled license and software purchases through conversational interactions.",
      },
      {
        title: "Easexpense Tracker",
        description:
          "Monitored software licenses and purchases in real-time for improved license management.",
      },
      {
        title: "Infrastructure & Domain Services",
        description:
          "Implemented domain purchase and DNS management similar to GoDaddy. Ensured global readiness with software licensing and tax compliance across regions.",
      },
    ],
  },
  {
    company: "Star Crown Media",
    designation: "Junior Web Developer",
    duration: "Feb 2023 – July 2024",
    projects: [
      {
        title: "Donation & Campaign Management",
        description:
          "Built modules for one-time donations integrating Stripe and PayPal. Developed interfaces for creating and tracking fundraising campaigns and events.",
      },
      {
        title: "Volunteer & Beneficiary Operations",
        description:
          "Implemented volunteer registration, scheduling, and task assignment features. Designed systems to manage beneficiary data and track aid distribution transparently.",
      },
      {
        title: "Admin Portal & Control Panel",
        description:
          "Designed and developed an intuitive admin portal enabling real-time user management, content updates, and platform configuration to streamline administration.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className=" bg-slate-500 bg-opacity-25 p-2 md:p-12 my-12 rounded-2xl max-w-7xl mx-auto font-sans text-gray-100 shadow-xl backdrop-blur-md border border-white/20">
      <header className="text-center mb-14">
        <h1 className="text-4xl font-extrabold tracking-wide text-indigo-300 drop-shadow-md">
          EXPERIENCE
        </h1>
      </header>

      <div className="space-y-10">
        {expArr.map((exp, idx) => (
          <article
            key={idx}
            className="bg-slate-700 bg-opacity-30 rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-500/40 hover:shadow-indigo-600/40 transition-shadow duration-300 w-[100%] md:max-w-7xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 border-b border-indigo-400/20 pb-4 mb-6">
              <div className="sm:w-1 h-1 sm:h-auto sm:bg-indigo-400 rounded-full sm:rounded-none"></div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-300">
                  {exp.company}
                </h2>
                <p className="text-sm md:text-base font-semibold text-gray-200 mt-1">
                  {exp.designation}
                </p>
                <p className="italic text-gray-400 text-xs md:text-sm mt-1">
                  {exp.duration}
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-sm md:text-base leading-relaxed text-gray-200">
              {exp.projects.map((proj, projIdx) => (
                <li key={projIdx} className="flex gap-3">
                  <span className="text-indigo-400 text-base mt-1">•</span>
                  <div>
                    <h3 className="font-semibold text-indigo-200">
                      {proj.title}
                    </h3>
                    <p className="text-gray-300">{proj.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
