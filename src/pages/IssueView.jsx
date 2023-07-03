import React, { Component } from "react";
import Issue from "../components/Issue";
import CommentList from "../components/CommentList";
import { useEffect } from "react";

function IssueView(props) {
  useEffect(() => {
    document.title = "Issue View";
  }, []);

  return (
    <>
      <Issue object={props.object} />
      <CommentList issue={props.object} />
    </>
  );
}

export default IssueView;
