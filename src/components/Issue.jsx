import React from "react";
import { Card, Button } from "react-bootstrap";
import Tag from "./Tag";
import { supabase } from "./supabaseClient";

function Issue(props) {
  const {
    id,
    issue_title,
    issue_description,
    issue_priority,
    issue_category,
    issue_time,
  } = props.object;

  async function handleDelete(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("student-issues")
      .delete()
      .match({ id: id });
    if (error !== null) alert("Error: " + error.message);
    else alert("Issue Deleted Successfully!");
    javascript: window.location.href = "/";
  }

  async function handleUpdate(e) {
    e.preventDefault();
    javascript: window.location.href = "/" + id + "/UpdateIssue";
  }

  return (
    <Card
      className='text-light px-3'
      style={{ backgroundColor: "rgb(50, 60, 70)", borderRadius: 0 }}>
      <Card.Header className='text-center'>
        {issue_title} - {issue_category} -
        <Tag
          priority={issue_priority}
          setPriority={() => this.priorityClassSetter(issue_priority)}
        />
        <span style={{ float: "left" }}>
          <Button onClick={handleUpdate}>Update</Button>
        </span>
        <span style={{ float: "right" }}>
          <Button onClick={handleDelete}>Delete</Button>
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Text>{issue_description}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-gray'>{issue_time}</Card.Footer>
    </Card>
  );
}

export default Issue;