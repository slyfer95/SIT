import React from "react";
import { useState, useEffect } from "react";
import { Nav, Card } from "react-bootstrap";
import { supabase } from "../components/supabaseClient";
import IssueTag from "../components/IssueTag";

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues();
  }, []);

  async function getIssues() {
    const { data } = await supabase.from("student-issues").select();
    //Issue Sorting
    data.sort((a, b) => {
      const priorityOrder = {
        High: 0,
        Medium: 1,
        Low: 2,
      };

      const priorityA = priorityOrder[a.issue_priority];
      const priorityB = priorityOrder[b.issue_priority];

      return priorityA - priorityB;
    });

    setIssues(data);
  }

  return (
    <div>
      <Card bg='dark' style={{ color: "white", borderRadius: 0 }}>
        <Card.Header>
          <span className='px-3'>Issue Title</span>
          <span style={{ float: "right" }}>
            <span style={{ marginRight: 70 }}>Issue Category</span>{" "}
            <span style={{ marginRight: 80 }}>Issue Priority</span> Posted
          </span>
        </Card.Header>
      </Card>
      {issues.map((issue) => (
        <Nav.Link href={"/Issue/" + issue.id}>
          <IssueTag object={issue} />
        </Nav.Link>
      ))}
    </div>
  );
}

export default IssueList;