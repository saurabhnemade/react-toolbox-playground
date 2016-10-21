import React, {PropTypes} from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox';

class ListTest extends React.Component{
  state = {
    checkbox: false
  };

  handleCheckboxChange = () => {
    this.setState({checkbox: !this.state.checkbox});
  };
  render(){
    return (
      <List selectable ripple>
        <ListSubHeader caption='Explore characters' />
        <ListItem
          avatar="https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg"
          caption="Batman"
          legend="What you do defines you!!"
          rightIcon='star'
        />
        <ListItem
          avatar="https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg"
          caption="Superman"
          legend="Fly high"
          rightIcon='star'
        />
        <ListItem
          avatar="https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg"
          caption="Deadpool"
          legend="Did you miss me?"
          rightIcon='star'
        />
        <ListSubHeader caption='Configuration' />
        <ListCheckbox
                  caption='Notify new comics'
                  checked={this.state.checkbox}
                  legend='You will receive a notification when a new one is published'
                  onChange={this.handleCheckboxChange}
                />
        <ListDivider />
        <ListItem caption='Contact publisher' leftIcon='send' />
        <ListItem caption='Remove publisher' leftIcon='delete' />
      </List>
    );
  }
}

export default ListTest;
