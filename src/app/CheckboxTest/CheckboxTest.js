import React,{ PropTypes } from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';

/*const CheckboxTest = () => (
  <div>
    <Checkbox checked label="Checked Option" />
    <Checkbox label="Unchecked Option" />
    <Checkbox checked disabled label="Disabled Option" />
  </div>
);

export default CheckboxTest;
*/
class CheckboxTest extends React.Component {
  state = { check1: true, check2: false};

  handleChange = (field, value) => {
    this.setState({[field]: value});
  };

  render() {
    return (
      <div>
        <Checkbox
            checked={this.state.check1}
            label="Checked Option"
            onChange={this.handleChange.bind(this, 'check1')}
        />

        <Checkbox
            checkbox={this.state.check2}
            label="Unchecked Option"
            onChange={this.handleChange.bind(this, 'check2')}
        />

        <Checkbox
          checked
          disabled
          label="Disabled checkbox"
        />
      </div>
    );
  }
}

export default CheckboxTest;
