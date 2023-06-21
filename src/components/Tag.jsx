import React from "react";

function Tag({ priority }) {
  if (
    priority.toLowerCase() === "high" ||
    priority.toLowerCase() === "medium"
  ) {
    var content =
      priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase();
  } else {
    content = "Low";
  }
  return <span className={settingPriority(priority)}>Priority: {content}</span>;
}

function settingPriority(priority) {
  if (priority.toLowerCase() === "high") return "p-1 rounded bg-danger";
  else if (priority.toLowerCase() === "medium")
    return "p-1 rounded bg-warning ";
  else return "p-1 rounded bg-success";
}

export default Tag;
