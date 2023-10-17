import React, { memo } from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome">
        <h2>Welcome to React Shani!</h2>
      </div>
    );
  }
}

export default memo(Welcome);
