import React, {PropTypes} from 'react';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

class MenuTest extends React.Component {
  render(){
      return(
        <IconMenu icon='more_vert' position='topLeft' menuRipple>
          <MenuItem value='download' icon='get_app' caption='Download'/>
          <MenuItem value='help' icon='favorite' caption='help'/>
          <MenuItem value='settings' icon='open_in_browser' caption='Open in App' />
          <MenuDivider/>
          <MenuItem value='signout' icon='delete' caption='Delete' disabled />
        </IconMenu>
      );
  }
}

export default MenuTest;
