import "./App.css";
import React, { useState, useEffect } from "react";
import IssueList from "./pages/IssueList";
import NewIssue from "./pages/NewIssue";
import IssueView from "./pages/IssueView";
import NavBar from "./components/NavBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { supabase } from "./components/supabaseClient";

function App() {
  const [issues, setIssues] = useState([]);

  async function getIssues() {
    const { data } = await supabase.from("student-issues").select();
    setIssues(data);
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/NewIssue'>
            <NewIssue />
          </Route>

          {issues.map((issue) => (
            <Route path={"/Issue/" + issue.id}>
              <IssueView object={issue} key={issue.id} />
            </Route>
          ))}

          <Route path='/'>
            <IssueList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
