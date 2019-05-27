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
              <strong style={{ margin: 0 }}>
                { task.title }
                <span style={{ float: 'right' }}>
                  <Badge bsStyle="primary" style={{ margin: '0 5px'}}>
                    { task.status }
                  </Badge>
                  <Badge bsStyle="primary" style={{ marginRight: '5px'}}>
                    { task.task_type }
                  </Badge>
                </span>
              </strong>
            </Panel.Heading>
            <Panel.Body>
              <div style={{ float: 'right', width: '140px' }}>
                Dr{ task.provider.name }
                <br />
                Patient: { task.patient.name }
              </div>
              <div style={{ marginRight: '150px' }}>
                <p>
                  { task.text }
                </p>
              </div>
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
