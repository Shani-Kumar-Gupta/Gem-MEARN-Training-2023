import React from "react";

type OscarTypes = {
  children: React.ReactNode
}
function Oscar(props: OscarTypes) {
  const { children } = props;
  return (
    <div className="oscar__container">
      {children}
    </div>
  );
}

export default Oscar;
