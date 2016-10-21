import React, {PropTypes} from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox';

class RadioButtonTest extends React.Component{
  state = {
    value: 'batman'
  };

  handleChange = (value) => {
    this.setState({value});
  };

  render(){
    return (
      <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="The Dark Knight" value='batman' />
          <RadioButton label="Robin" value='robin' />
          <RadioButton label="SuperMan" value='superman' />
          <RadioButton label="Spiderman" value='spiderman' />
      </RadioGroup>
    );
  }
}

export default RadioButtonTest;
