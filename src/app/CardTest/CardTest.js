import React, { PropTypes } from 'react';
import Button from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const dummyText = 'Just a stupid text';

const CardTest = () => (
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="React News"
      subtitle="Its trending"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Awesome UI components"
      subtitle="These components are awesome"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
        <Button label="Save" primary raised />
        <Button label="Discard" raised/>
    </CardActions>
  </Card>
);

export default CardTest;
