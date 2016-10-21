import React, {PropTypes} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

class FontIconTest extends React.Component {
  render(){
    return(
      <span>
        <FontIcon value='add' />
        <FontIcon value='favorite' />
        <FontIcon>star</FontIcon>
      </span>
    );
  }
}

export default FontIconTest;
