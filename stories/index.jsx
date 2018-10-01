import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from '../src/components/clock';
import Button from '../src/components/button';

storiesOf('Clock', module)
  .add('Plain Clock', () => <Clock name="Plain Clock" />)
  .add('Empty Clock', () => <Clock name="" />);

storiesOf('Button', module)
  .add('Plain Button', () => <Button />)
  .add('Button with text', () => <Button name="Button with text" />);
