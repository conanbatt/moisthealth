import React from "react"
import PropTypes from "prop-types"
import { Panel, Button, ButtonToolbar, Badge } from "react-bootstrap"

class Dashboard extends React.Component {
  render () {
    const { tasks } = this.props;
    console.log('tasks', tasks);
    return (
      <React.Fragment>
        {tasks.map(task => (
          <Panel key={task.id}>
            <Panel.Heading>
              <h3 style={{ margin: 0 }}>
                { task.title }
                <Badge bsStyle="primary" style={{ margin: '0 5px'}}>
                  { task.status }
                </Badge>
                <Badge bsStyle="primary" style={{ marginRight: '5px'}}>
                  { task.task_type }
                </Badge>
              </h3>
            </Panel.Heading>
            <Panel.Body>
              <p>
                Provider: { task.provider.name }
                <br />
                Patient: { task.patient.name }
              </p>
              <p className="lead">
                { task.text }
              </p>

            </Panel.Body>
            <Panel.Footer>
              <ButtonToolbar>
                <Button bsStyle="primary" href={`/tasks/${task.id}`}>
                  See Task
                </Button>
              </ButtonToolbar>
            </Panel.Footer>
          </Panel>
        ))}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  tasks: PropTypes.array
};
export default Dashboard
