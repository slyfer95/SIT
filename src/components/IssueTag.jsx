import React, { useState } from "react";

function IssueTag(props) {
  const { issue_title, issue_priority, issue_time, issue_category } =
    props.object;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const setPriority = (value) => {
    if (value === "High") return "text-danger";
    else if (value === "Medium") return "text-warning";
    else return "text-success";
  };

  const styleSheet = {
    div: {
      backgroundColor: isHover ? "rgb(150, 170, 200)" : "rgb(50, 60, 70)",
      borderRadius: isHover ? 5 : 0,
      color: isHover ? "black" : "white",
      padding: isHover ? 15 : 10,
      textAlign: "right",
    },
    issueTitle: {
      float: "left",
      fontWeight: "bold",
      paddingLeft: 30,
    },
    issuePriority: { paddingRight: 90, fontWeight: "bold" },
    issueTime: {
      float: "right",
    },
  };

  return (
    <div
      className='px-2'
      style={styleSheet.div}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span style={styleSheet.issueTitle}>{issue_title} </span>
      <span style={styleSheet.issuePriority}>{issue_category}</span>
      <span
        style={styleSheet.issuePriority}
        className={setPriority(issue_priority)}>
        {issue_priority}
      </span>
      <span style={styleSheet.staticPriority}>{issue_time}</span>
    </div>
  );
}

export default IssueTag;