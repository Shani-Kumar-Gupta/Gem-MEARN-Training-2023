import React from 'react';
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      {isLoggedIn ? `Hey ${name}, having ${messageCount} unread messages!` : ''}
    </div>
  );
}

export default Greet;
