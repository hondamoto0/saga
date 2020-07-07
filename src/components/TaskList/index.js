import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import TaskItem from '../TaskItem/index';

import styles from './styles';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item key={status.value} xs={12} md={4}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => {
            const { title } = task;
            return <TaskItem task={task} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
