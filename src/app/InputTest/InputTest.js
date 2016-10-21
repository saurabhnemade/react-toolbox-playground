import React, {PropTypes} from 'react';
import Input from 'react-toolbox/lib/input';

class InputTest extends React.Component {
  state = { name: '', phone: '', multiline: '', email:'', hint: ''};
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render(){
    return(
      <section>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
        <Input type='text' label='Disabled field' disabled />
        <Input type='text' multiline name='multiline' label='Multiline' maxLength={20} value={this.state.multiline} onChange={this.handleChange.bind(this,'multiline')} />
        <Input type='email' label='Email Address' name='email' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
        <Input type='text' label='Required field' hint='Love you all' value={this.state.hint} required onChange={this.handleChange.bind(this, 'hint')} icon='share' />
      </section>
    );
  }
}

export default InputTest;
