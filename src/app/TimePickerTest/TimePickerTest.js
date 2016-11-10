import React,{PropTypes} from 'react';
import TimePicker from 'react-toolbox/lib/time_picker';

let time = new Date();
time.setHours(18);
time.setMinutes(45);

class TimePickerTest extends React.Component {
  state = {time};

  handleChange = (time) => {
    this.setState({time});
  };

  render(){
    return (
      <section>
        <TimePicker label='Finishing time' onChange={this.handleChange} value={this.state.time} />
      </section>
    );
  }
}

export default TimePickerTest;
