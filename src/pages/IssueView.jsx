import React, { Component } from "react";
import Issue from "../components/Issue";

function IssueView(props) {
  const object = {
    id: 0,
    issue_title: "Issue No 1",
    issue_priority: "High",
    issue_status: "Closed",
    issue_description:
      "Requirements are not independent and one requirement often generates or constrains other requirements <br>- A user requirement concerned with security, may appear to be a non-functional requirement but when developed in detail, it may generate other requirements that are clearly functional such as the need to include user authentication facilities in the system",
    issue_time: "30 mins Ago",
  };

  return (
    <>
      <Issue object={props.object} />
    </>
  );
}

export default IssueView;
