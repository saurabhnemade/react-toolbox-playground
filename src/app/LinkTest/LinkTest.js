import React, { PropTypes } from 'react';
import Link from 'react-toolbox/lib/link';

class LinkTest extends React.Component{
  render(){
    return (
      <nav>
        <Link active href="/#/link" label="Work" count={4} icon='business' />
        <Link href="/#/link" label="Blog" icon='speaker_notes' />
        <Link href="/#/link" label="Explore" icon='explore' />
      </nav>
    );
  };
}

export default LinkTest;
