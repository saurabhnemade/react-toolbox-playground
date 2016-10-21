import React, {PropTypes} from 'react';
import {Button, Snackbar} from 'react-toolbox';

class SnackbarTest extends React.Component {
  state = {
      active: false
  };

  handleClick = () =>{
    this.setState({active: true});
  };

  handleSnackbarClick = () => {
    this.setState({active: false});
  };

  render(){
    return (
      <section>
        <Button label='Show Snackbar' raised onClick={this.handleClick} />
        <Snackbar
          action='Dismiss'
          active={this.state.active}
          icon='question_answer'
          label='Just a funny label.'
          onClick={this.handleSnackbarClick}
          type='accept'
        />
      </section>
    );
  }
}

export default SnackbarTest;
