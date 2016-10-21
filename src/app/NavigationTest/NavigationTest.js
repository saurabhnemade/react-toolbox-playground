import React,{PropTypes} from 'react';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon:'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

class NavigationTest extends React.Component{
  render(){
    return (
      <div>
        <Navigation type="horizontal" actions={actions} />
        <Navigation type="vertical">
            <Link href='/#/test' label='Inbox' icon='inbox' />
            <Link href='/#/test' active label='Profile' icon='person' />
        </Navigation>
      </div>
    );
  }
}

export default NavigationTest;
