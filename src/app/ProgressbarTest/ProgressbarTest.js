import React, {PropTypes} from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

class ProgressbarTest extends React.Component{
  render(){
    return (
      <div>
        <ProgressBar type="circular" mode="indeterminate" />
        <ProgressBar type="linear" mode="determinate" />
      </div>
    );
  }
}

export default ProgressbarTest;
