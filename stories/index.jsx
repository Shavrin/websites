import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from '../src/components/clock';
import Button from '../src/components/button';
import Title from '../src/components/title';

storiesOf('Clock', module)
  .add('Plain Clock', () => <Clock name="Plain Clock" />)
  .add('Empty Clock', () => <Clock name="" />);

storiesOf('Button', module)
  .add('Plain Button', () => <Button />)
  .add('Button with text', () => <Button name="Search now!" />)
  .add('Transparent', () => <Button name="My Account" transparent="true" />);

storiesOf('Title', module).add('Some text', () => <Title name="Interplanetary" />);
