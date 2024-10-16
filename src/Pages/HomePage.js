import React from "react";
import ProjectList from "../Components/ProjectList";
import HomepageData from "../Components/homepage Data/HomepageData";
import ConceptsLearned from "../Components/homepage Data/ConceptsLearned";

const HomePage = () => {
  return (
    <div>
      <ConceptsLearned />
      <ProjectList />
      <HomepageData />
    </div>
  );
};

export default HomePage;
