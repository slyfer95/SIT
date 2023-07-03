import React from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { supabase } from "../components/supabaseClient";

function NewIssue() {
  const onPrioritySelected = (value) => setPriority(value);
  const onCategorySelected = (value) => setCategory(value);

  useEffect(() => {
    document.title = "New Issue";
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let title = document.getElementById("IssueForm.IssueTitle").value;
    let description = document.getElementById(
      "IssueForm.IssueDescription"
    ).value;
    let name = document.getElementById("IssueForm.UserName").value;
    let cms = document.getElementById("IssueForm.UserCMS").value;

    if (selectedPriority === "Priority") selectedPriority = "Low";
    if (selectedCategory === "Category")
      selectedCategory = "Category Not Selected";

    const { error } = await supabase.from("student-issues").insert({
      student_name: name,
      student_cms: cms,
      issue_title: title,
      issue_description: description,
      issue_category: selectedCategory,
      issue_priority: selectedPriority,
    });

    if (error !== null) alert("Error: " + error.message);
    else alert("Issue Submitted Successfully!");
    window.location.href = "/";
  }

  let dropDownValuesPriority = ["High", "Medium", "Low"];
  let dropDownValuesCategory = ["Academic", "Transport", "Disciplinary"];
  let [selectedPriority, setPriority] = useState("Priority");
  let [selectedCategory, setCategory] = useState("Category");

  return (
    <div
      className='px-5 row text-light'
      style={{ backgroundColor: "rgb(50, 60, 70)" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='IssueForm.UserName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Full Name' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='IssueForm.UserCMS'>
          <Form.Label>CMS ID</Form.Label>
          <Form.Control type='number' placeholder='Enter CMS ID' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='IssueForm.IssueTitle'>
          <Form.Label>Issue Title</Form.Label>
          <Form.Control type='text' placeholder='New Issue' required />
        </Form.Group>
        <Form.Group className='mb-3 row' controlId='IssueForm.IssuePriority'>
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
        <Form.Group className='mb-3' controlId='IssueForm.IssueDescription'>
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
export default NewIssue;
