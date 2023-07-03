import React from "react";
import { Form, Button } from "react-bootstrap";
import Comment from "./Comment";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function CommentList(props) {
  const [commentsList, setComments] = useState([]);
  const { id } = props.issue;

  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const { data } = await supabase
      .from("comments")
      .select()
      .eq("issue_id", id);
    setComments(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let name = document.getElementById("CommentForm.Name").value;
    let cms = document.getElementById("CommentForm.CMS").value;
    let comment = document.getElementById("CommentForm.Comment").value;

    const { error } = await supabase.from("comments").insert({
      student_name: name,
      student_cms: cms,
      comment_description: comment,
      issue_id: id,
    });
    if (error !== null) alert("Error: " + error.message);
    else alert("Comment Submitted Successfully!");
    javascript: window.location.href = "/Issue/" + id;
  }

  return (
    <div
      style={{
        padding: "10px 50px 30px 50px",
        backgroundColor: "rgb(60, 60, 70)",
        color: "white",
      }}>
      <div>
        <h3>Leave a Comment Below!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='CommentForm.Name' className='col-4'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>
          <Form.Group controlId='CommentForm.CMS' className='col-4'>
            <Form.Label>Your CMS</Form.Label>
            <Form.Control type='number' required />
          </Form.Group>
          <Form.Group controlId='CommentForm.Comment'>
            <Form.Label>Comment</Form.Label>
            <Form.Control as='textarea' rows={3} required />
          </Form.Group>
          <Button className='col-2 mt-2' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
      <div>
        {commentsList.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentList;