import React from "react";

import PrisonerList from "./PrisonList";
import PrisonForm from "./PrisonForm";

const Admin = props => {
  return (
    <>
      <PrisonForm />
      <PrisonerList {...props} />
    </>
  );
};

export default Admin;
