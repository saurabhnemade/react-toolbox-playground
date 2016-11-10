import React,{PropTypes} from 'react';
import {Button, Tooltip, Link, Input} from 'react-toolbox';

const TooltipButton = Tooltip(Button);
const TooltipInput = Tooltip(Input);
const TooltipLink = Tooltip(Link);

const TooltipTest = () => (
  <section>
    <div>
      <TooltipButton label='Bookmark' icon='bookmark' raised primary tooltip='Bookmark tooltip test' tooltipDelay={500} />
      <TooltipButton icon='add' floating accent tooltip='Floating Tooltip' />
      <TooltipLink count={42} href="#" label="The answer is" icon='speaker_notes' tooltip='Question - universe?'/>
      <TooltipInput tooltip='Input tooltip' />
    </div>
  </section>
);

export default TooltipTest;
