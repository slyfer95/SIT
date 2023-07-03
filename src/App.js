import React, { useState, useEffect } from "react";
import IssueList from "./pages/IssueList";
import NewIssue from "./pages/NewIssue";
import IssueView from "./pages/IssueView";
import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { supabase } from "./components/supabaseClient";
import UpdateIssue from "./pages/UpdateIssue";

function App() {
  const [issues, setIssues] = useState([]);

  async function getIssues() {
    const { data } = await supabase.from("student-issues").select();
    setIssues(data);
  }

  useEffect(() => {
    document.body.style = "background: rgb(50, 60, 70)";
    document.title = "SIT";
    getIssues();
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/NewIssue' element={<NewIssue />} />
          {issues.map((issue) => (
            <Route
              path={"/Issue/" + issue.id}
              element={<IssueView object={issue} key={issue.id} />}
            />
          ))}
          {issues.map((issue) => (
            <Route
              path={issue.id + "/UpdateIssue"}
              element={<UpdateIssue object={issue} key={issue.id} />}
            />
          ))}
          <Route path='/' element={<IssueList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
