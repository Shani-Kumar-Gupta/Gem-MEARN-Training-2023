import React from 'react';
type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

function Person(props: PersonProps) {
  const { firstName, lastName } = props.name;
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
}

export default Person;
