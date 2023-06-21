import React from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { supabase } from "../components/supabaseClient";

function NewIssue() {
  const onListItemSelected = (value) => setSelectedItem(value);

  async function handleSubmit(e) {
    e.preventDefault();
    let title = document.getElementById("IssueForm.IssueTitle").value;
    let description = document.getElementById(
      "IssueForm.IssueDescription"
    ).value;

    let priority = selectedItem;

    try {
      const { error } = await supabase.from("student-issues").insert({
        issue_title: title,
        issue_description: description,
        issue_status: "Open",
        issue_priority: priority,
      });
    } catch (e) {
      alert("Error occured: " + e);
    }
    alert("Issue Submitted Successfully!");
  }

  let dropDownValues = ["High", "Medium", "Low"];
  let [selectedItem, setSelectedItem] = useState("Priority");
  return (
    <>
      <div className='p-5'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='IssueForm.IssueTitle'>
            <Form.Label>Issue Title</Form.Label>
            <Form.Control type='text' placeholder='New Issue' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='IssueForm.IssuePriority'>
            <DropdownButton id='dropdown-basic-button' title={selectedItem}>
              {dropDownValues.map((value) => (
                <Dropdown.Item onClick={() => onListItemSelected(value)}>
                  {value}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>
          <Form.Group className='mb-3' controlId='IssueForm.IssueDescription'>
            <Form.Label>Issue Description</Form.Label>
            <Form.Control as='textarea' rows={7} required />
          </Form.Group>
          <Button className='center' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NewIssue;
