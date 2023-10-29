import React, { memo } from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome">
        <h2>
          Welcome to React {this.props.greetPeopleName}! a.k.a.{' '}
          {this.props.heroName}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default memo(Welcome);
