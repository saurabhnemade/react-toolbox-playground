import React, { PropTypes }  from 'react';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';

const ChipTest = () => (
  <div>
      <Chip>Simple</Chip>
      <Chip>
        <span style={{textDecoration: 'line-through'}}>Standard</span>
        <strong>Custom</strong> chip <small>(custom markup)</small>
      </Chip>
      <Chip deletable>Deletable</Chip>
      <Chip>
        <Avatar style={{backgroundColor: 'deepskyblue'}} icon="folder" />
        <span>Avatar Chip</span>
      </Chip>
      <Chip>
        <Avatar title="S" />
        <span>Initial Name Chip</span>
      </Chip>
      <Chip>
        <Avatar><img src="https://placeimg.com/80/80/animals" /></Avatar>
        <span>Image chip</span>
      </Chip>
  </div>
);

export default ChipTest;
