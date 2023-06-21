import React from "react";
import { useState, useEffect } from "react";
import Issue from "../components/Issue";
import { Nav } from "react-bootstrap";
import { supabase } from "../components/supabaseClient";

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues();
  }, []);

  async function getIssues() {
    const { data } = await supabase.from("student-issues").select();
    setIssues(data);
  }

  return (
    <div>
      {issues.map((issue) => (
        <Nav.Link href={"/Issue/" + issue.id}>
          <Issue object={issue} key={issue.id} />
        </Nav.Link>
      ))}
    </div>
  );
}

export default IssueList;
