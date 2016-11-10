import React,{PropTypes} from 'react';
import {Tab, Tabs} from 'react-toolbox';

class TabsTest extends React.Component{
  state = {
    index: 1,
    fixedIndex: 1,
    inverseIndex: 1
  };

  handleTabChange = (index) => {
    this.setState({index});
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  handleActive = () => {
    console.log('acitve handle triggered');
  };

  render () {
    return (
      <section>
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label="First"><small>First Tab Content</small></Tab>
          <Tab label="Second"><small>Second tab Content</small></Tab>
          <Tab label="Third"><small>Third tab Content</small></Tab>
          <Tab label="Fourth"><small>Fourth tab Content</small></Tab>
          <Tab label="Fifth"><small>Fifth tab Content</small></Tab>
        </Tabs>
        <h5>Fixed Tabs</h5>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label='First'><small>First Content</small></Tab>
          <Tab label='Second'><small>Second Content</small></Tab>
          <Tab label='Third'><small>Third Content</small></Tab>
        </Tabs>
        <h5>Inverse Tabs</h5>
        <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
          <Tab label='First'><small>First Content</small></Tab>
          <Tab label='Second'><small>Second Content</small></Tab>
          <Tab label='Third'><small>Third Content</small></Tab>
          <Tab label='Disabled' disabled><small>Disabled Content</small></Tab>
        </Tabs>        
      </section>
    );
  }
}

export default TabsTest;
