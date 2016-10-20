import React, {PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';

class DrawerTest extends React.Component{
  state = {
    active: false
  };

  handleToggle = () => {
     this.setState({active: !this.state.active});
   };

  render() {
    return (
      <div>
        <Button label="Left Menu" raised accent onClick={this.handleToggle} />
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h5>Title up here</h5>
          <Button label="Button 1" raised  />
          <Button label="Button 2" raised />
        </Drawer>
      </div>
    )
  }
}

export default DrawerTest;
