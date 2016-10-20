import React, { PropTypes } from 'react';
import Button from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';

class DialogTest extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Save", onClick: this.handleToggle }
  ];

  render () {
    return (
      <div>
        <Button label="Show Dialog" onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="Test Dialog"
        >
          <p>Description for Showing dialog is here</p>
        </Dialog>
      </div>
    );
  }
}

export default DialogTest;
