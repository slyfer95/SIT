import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { supabase } from "../components/supabaseClient";

function UpdateIssue(props) {
  const {
    id,
    issue_title,
    issue_category,
    issue_description,
    issue_priority,
    student_name,
    student_cms,
  } = props.object;
  let dropDownValuesPriority = ["High", "Medium", "Low"];
  let dropDownValuesCategory = ["Academic", "Transport", "Disciplinary"];

  useEffect(() => {
    document.getElementById("UpdateForm.ID").value = id;
    document.getElementById("UpdateForm.UserName").value = student_name;
    document.getElementById("UpdateForm.UserCMS").value = student_cms;
    document.getElementById("UpdateForm.IssueTitle").value = issue_title;
    document.getElementById("UpdateForm.IssueDescription").value =
      issue_description;
    document.title = "Update Issue";
  }, []);

  let [selectedPriority, setPriority] = useState(issue_priority);
  let [selectedCategory, setCategory] = useState(issue_category);

  const onPrioritySelected = (value) => setPriority(value);
  const onCategorySelected = (value) => setCategory(value);

  async function handleSubmit(e) {
    e.preventDefault();
    let title = document.getElementById("UpdateForm.IssueTitle").value;
    let description = document.getElementById(
      "UpdateForm.IssueDescription"
    ).value;
    let name = document.getElementById("UpdateForm.UserName").value;
    let cms = document.getElementById("UpdateForm.UserCMS").value;
    if (selectedPriority === "Priority") selectedPriority = "Low";
    if (selectedCategory === "Category")
      selectedCategory = "Category Not Selected";

    const { error } = await supabase
      .from("student-issues")
      .update({
        student_name: name,
        student_cms: cms,
        issue_title: title,
        issue_description: description,
        issue_category: selectedCategory,
        issue_priority: selectedPriority,
      })
      .eq("id", id);

    if (error !== null) alert("Error: " + error.message);
    else alert("Issue Updated Successfully!");
    window.location.href = "/";
  }

  return (
    <div
      className='px-5 row text-light'
      style={{ backgroundColor: "rgb(50, 60, 70)" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='UpdateForm.ID'>
          <Form.Label>Issue ID</Form.Label>
          <Form.Control type='text' disabled />
        </Form.Group>
        <Form.Group className='mb-3' controlId='UpdateForm.UserName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' disabled />
        </Form.Group>
        <Form.Group className='mb-3' controlId='UpdateForm.UserCMS'>
          <Form.Label>CMS ID</Form.Label>
          <Form.Control type='number' disabled />
        </Form.Group>
        <Form.Group className='mb-3' controlId='UpdateForm.IssueTitle'>
          <Form.Label>Issue Title</Form.Label>
          <Form.Control type='text' placeholder='New Issue' required />
        </Form.Group>
        <Form.Group className='mb-3 row' controlId='UpdateForm.IssuePriority'>
          <DropdownButton
            className='col-2'
            id='dropdown-basic-button'
            title={selectedPriority}>
            {dropDownValuesPriority.map((value) => (
              <Dropdown.Item onClick={() => onPrioritySelected(value)}>
                {value}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            className='col-2'
            id='dropdown-basic-button'
            title={selectedCategory}>
            {dropDownValuesCategory.map((value) => (
              <Dropdown.Item onClick={() => onCategorySelected(value)}>
                {value}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Form.Group>
        <Form.Group className='mb-3' controlId='UpdateForm.IssueDescription'>
          <Form.Label>Issue Description</Form.Label>
          <Form.Control as='textarea' rows={5} required />
        </Form.Group>
        <Button className='center col-12' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateIssue;
