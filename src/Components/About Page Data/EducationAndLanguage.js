import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiIndiaGate } from "react-icons/gi";

const EducationAndLanguage = () => {
  return (
    <section className="bg-slate-500 bg-opacity-25 p-2 md:p-12 my-12 rounded-2xl w-[95vw] md:w-[70vw] mx-auto font-sans text-gray-100 shadow-xl backdrop-blur-md border border-white/20">
      <div className="lg:flex gap-10">
        {/* Education Card */}
        <article className="bg-slate-700 bg-opacity-30 rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-500/40 hover:shadow-indigo-600/40 transition-shadow duration-300 min-w-60 w-full flex-1 mb-10 lg:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-3xl text-white" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <MdSchool className="text-xl text-blue-300 mt-1" />
              <div>
                <p className="font-semibold">
                  Indian Institute of Technology and Management
                </p>
                <p className="text-sm text-gray-300">Jan 2019 - Dec 2022</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GiIndiaGate className="text-xl text-green-300 mt-1" />
              <div>
                <p className="font-semibold">
                  Sumeet Rahul Goel Memorial Sr. Secondary School
                </p>
                <p className="text-sm text-gray-300">Jul 2017 - May 2018</p>
              </div>
            </div>
          </div>
        </article>

        {/* Language Skills Card */}
        <article className="bg-slate-700 bg-opacity-30 rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-500/40 hover:shadow-indigo-600/40 transition-shadow duration-300 w-full flex-1">
          <div className="flex items-center gap-3 mb-4">
            <FaLanguage className="text-3xl text-white" />
            <h2 className="text-2xl font-bold">Language Skills</h2>
          </div>
          <ul className="space-y-3 pl-2">
            <li>
              <span className="font-semibold text-white">Hindi</span> – Native
            </li>
            <li>
              <span className="font-semibold text-white">English</span> –
              Intermediate
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default EducationAndLanguage;
