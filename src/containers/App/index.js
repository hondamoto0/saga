import React, { Component } from 'react';
import styles from './styles.js';
import theme from '../../commons/Theme/index';
import TaskBoard from '../Taskboard/index';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
