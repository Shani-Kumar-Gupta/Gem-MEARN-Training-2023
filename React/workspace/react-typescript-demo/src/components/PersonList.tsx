import React from 'react';
type PersonListProps = {
  nameslist: {
    firstName: string;
    lastName: string;
  }[];
};
function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.nameslist.map((name, idx) => (
        <h1 key={idx}>
          {name.firstName} {name.lastName}
        </h1>
      ))}
    </div>
  );
}

export default PersonList;
