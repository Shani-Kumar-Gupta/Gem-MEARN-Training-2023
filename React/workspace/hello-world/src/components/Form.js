import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topics: 'react',
    };
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topics}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserChange}
            id="username"
            name="username"
          ></input>
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={this.state.comment}
            onChange={this.handleCommentChange} // React Controlled Component
          ></textarea>
        </div>
        <div>
          <label htmlFor="topic">Topic</label>
          <select
            id="topic"
            value={this.state.topics}
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
