import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.comment);
    // TODO - Call an action creator
    // and save the comment
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          onChange={this.handleChange}
          name="comment"
          id="comment"
          value={this.state.comment}
        />
        <div>
          <button type="submit">Sumbit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
