import React from "react";
import ProjectList from "../Components/ProjectList";
import ConceptsLearned from "../Components/homepage Data/ConceptsLearned";

const HomePage = () => {
  return (
    <div>
      <ConceptsLearned />
      <ProjectList />
    </div>
  );
};

export default HomePage;
