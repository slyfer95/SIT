import React from "react";
import Card from "react-bootstrap/Card";

function Comment(props) {
  const { student_name, comment_description, posted } = props.comment;

  return (
    <>
      {}
      <Card
        bg='dark'
        style={{ borderRadius: 0, color: "white", marginTop: 10 }}>
        <Card.Header>
          {student_name}
          <span style={{ float: "right" }}>{posted}</span>
        </Card.Header>
        <Card.Body>
          <p className='mb-0'>{comment_description}</p>
        </Card.Body>
      </Card>
    </>
  );
}

export default Comment;