import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  if (!props.comments.length) {
    return <p>No comments</p>;
  }
  return (
    <ul>
      {props.comments.map(comment => (
        <li>{comment}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
