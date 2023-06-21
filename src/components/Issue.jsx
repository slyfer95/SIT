import { Card } from "react-bootstrap";
import Tag from "./Tag";

function Issue(props) {
  const {
    issue_title,
    issue_description,
    issue_priority,
    issue_status,
    issue_time,
  } = props.object;
  return (
    <Card>
      <Card.Header className='text-center'>
        {issue_title} - {issue_status} -
        <Tag
          priority={issue_priority}
          setPriority={() => this.priorityClassSetter(issue_priority)}
        />
      </Card.Header>
      <Card.Body>
        <Card.Text>{issue_description}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>{issue_time}</Card.Footer>
    </Card>
  );
}

export default Issue;
